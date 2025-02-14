import { Block } from '@block/block.ts'
import { dynamicContext, isUsingState } from '@context/executionContext.ts'
import {
  removeClasses,
  setClasses,
  setProperty,
  setStyleProperty,
} from '@element/property.ts'
import { AllElementProps } from '@element/type.ts'
import { Dynamic } from '@hook/dynamic.ts'
import {
  isArray,
  isFunction,
  isRvjsFunction,
  RvjsFunction,
} from '@type/guard.ts'
import { isElementBlock, isTextNodeBlock } from '@type/rvjs.ts'
import { Queue } from '@util/dataStructure/queue.ts'
import { Observer } from '@util/observer.ts'
import { RVJS_GET_STATE_SYMBOL } from '@util/symbol.ts'

export type GetState<State = unknown> = RvjsFunction<
  (context?: StateContext) => State
>

export type SetState<State = unknown> = RvjsFunction<
  (newState: State | SetStateCallback<State>) => void
>

type SetStateCallback<State = unknown> = (oldState: State) => State

export interface StateContext {
  block?: Block
  type:
    | 'useEffect'
    | 'childrenRender'
    | 'domProperty'
    | 'styleProperty'
    | 'classesProperty'
    | 'flowRender'
  property: string
  value: Dynamic | any
}

export const useState = <State>(
  initialState: State,
): [GetState<State>, SetState<State>] => {
  let state = initialState
  const subscribers = new StateObserver()
  let isNotifying = false
  const lazySubscribeQueue = new Queue<StateContext>()

  const getState: GetState<State> = (subscribeStateContext?: StateContext) => {
    if (subscribeStateContext || dynamicContext.has()) {
      if (isNotifying) {
        lazySubscribeQueue.push(subscribeStateContext ?? dynamicContext.get())
      } else {
        subscribers.subscribeState(
          subscribeStateContext ?? dynamicContext.get(),
        )
      }
    }
    isUsingState.add(getState)
    return state
  }
  getState.$$typeof = RVJS_GET_STATE_SYMBOL

  const setState: SetState<State> = (
    newState: State | SetStateCallback<State>,
  ) => {
    if (newState === state) {
      return
    }
    if (isFunction(newState)) {
      state = newState(state) as State
    } else {
      state = newState
    }
    isNotifying = true
    notifyWhenStateChange(subscribers)
    isNotifying = false
    lazySubscribeQueue.popAll((stateContext) => {
      subscribers.subscribeState(stateContext)
    })
  }
  setState.$$typeof = RVJS_GET_STATE_SYMBOL

  return [getState, setState]
}

const notifyWhenStateChange = (subscribers: StateObserver) => {
  const lazyUseEffectQueue: Function[][] = []
  subscribers.notify((block, values) => {
    Object.entries(values.domProperty).forEach(([property, value]) => {
      if (isElementBlock(block)) {
        setProperty(block, property as keyof AllElementProps, value())
      }
    })
    Object.entries(values.styleProperty).forEach(([property, value]) => {
      if (isElementBlock(block)) {
        setStyleProperty(block, property as string, value())
      }
    })
    values.childrenRender.forEach((render) => {
      render()
    })
    values.flowRender.forEach((render) => {
      render()
    })
    values.classesProperty.forEach((classes) => {
      const { classFn, removePrevClassFn } = classes
      const singleClassString = classFn() as string | string[]
      removePrevClassFn()
      if (isElementBlock(block)) {
        setClasses(block.element, singleClassString)
      }
      classes.removePrevClassFn = () => {
        if (isElementBlock(block)) {
          removeClasses(block.element, singleClassString)
        }
      }
    })
    lazyUseEffectQueue.push(values.useEffect)
  })
  lazyUseEffectQueue.flat().forEach((useEffect) => {
    useEffect()
  })
}

export const isGetState = (value: unknown): value is GetState => {
  return isRvjsFunction(value) && value?.$$typeof === RVJS_GET_STATE_SYMBOL
}

export interface StateObserverValue {
  useEffect: Function[]
  childrenRender: Function[]
  domProperty: Record<string, Function>
  styleProperty: Record<string, Function>
  classesProperty: {
    classFn: Function
    removePrevClassFn: Function
  }[]
  flowRender: Function[]
}

class StateObserver extends Observer<Block | null, StateObserverValue> {
  constructor() {
    super()
  }

  subscribeState(stateContext: StateContext) {
    const { block = null, type, property, value } = stateContext

    if (!this.hasValueBySubscriber(block)) {
      super.createEmptyValue(block, {
        useEffect: [],
        childrenRender: [],
        domProperty: {},
        styleProperty: {},
        classesProperty: [],
        flowRender: [],
      } as StateObserverValue)
      if (block && !isTextNodeBlock(block)) {
        block.addStateUnsubscribeHandler(this.unsubscribe.bind(this))
      }
    }
    const subscriberValue = this.getValueBySubscriber(block)!
    if (isArray(subscriberValue[type])) {
      // @ts-ignore
      subscriberValue[type].push(value)
    } else {
      // @ts-ignore
      subscriberValue[type][property] = value
    }
  }
}
