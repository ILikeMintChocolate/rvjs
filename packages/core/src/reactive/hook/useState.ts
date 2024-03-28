import { isComponentBlock } from '@component/componentBlock.ts'
import {
  ElementContext,
  subscribeStateContext,
} from '@context/executionContext.ts'
import { AnyBlock } from '@dom/type.ts'
import { isElementBlock } from '@element/elementBlock.ts'
import { setProperty } from '@element/property.ts'
import { DynamicRender } from '@hook/dynamic.ts'
import { isFunction } from '@type/guard.ts'
import { Observer } from '@util/observer.ts'
import { Queue } from '@util/queue.ts'

export type GetState<State = unknown> = () => State
export type SetState<State = unknown> = (
  newState: State | SetStateCallback<State>,
) => void
type SetStateCallback<State = unknown> = (oldState: State) => void

export const useState = <State>(
  initialState: State,
): [GetState<State>, SetState<State>] => {
  let state = initialState
  const subscribers = new StateObserver()
  let isNotifying = false
  const lazySubscribeQueue = new Queue<ElementContext>()

  const getState: GetState<State> = () => {
    if (subscribeStateContext.has()) {
      const { block, property, value } = subscribeStateContext.get()!
      if (isNotifying) {
        lazySubscribeQueue.push({ block, property, value })
      } else {
        subscribers.subscribe(block, [property, value])
      }
    }
    return state
  }

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
    subscribers.notify((block, values) => {
      Object.entries(values).forEach(([property, value]) => {
        if (
          property === null ||
          exceptionProperties[property as string]?.(block)
        ) {
          value()
        } else if (isElementBlock(block)) {
          setProperty(block, property as string, value)
        }
      })
    })
    isNotifying = false
    lazySubscribeQueue.popAll(({ block, property, value }) => {
      subscribers.subscribe(block, [property, value])
    })
  }

  return [getState, setState]
}

export const isGetState = (value: unknown): value is GetState => {
  return isFunction(value) && value.name === 'getState'
}

type StateObserverValue = [string | null, DynamicRender | Function]

class StateObserver extends Observer<AnyBlock, Record<string, any>> {
  constructor() {
    super()
  }

  subscribe(subscriber: AnyBlock, value: StateObserverValue) {
    if (!this.hasValueBySubscriber(subscriber)) {
      super.subscribe(subscriber, {
        [value[0] as string]: value[1],
      })
      if (isElementBlock(subscriber)) {
        subscriber.appendStateUnsubscribeHandler(this.unsubscribe.bind(this))
      }
    } else {
      const values = this.getValueBySubscriber(subscriber)!
      if (!values[value[0] as string]) {
        values[value[0] as string] = value[1]
      }
    }
  }
}

const exceptionProperties: Record<string, Function> = {
  useEffect: (block: AnyBlock) => isComponentBlock(block),
  forRender: (block: AnyBlock) => isElementBlock(block),
  switchRender: (block: AnyBlock) => isElementBlock(block),
  toggleRender: (block: AnyBlock) => isElementBlock(block),
  style: (block: AnyBlock) => isElementBlock(block),
}
