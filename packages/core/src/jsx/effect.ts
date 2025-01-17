import { currentComponent } from '@context/component.ts'
import { stateContext } from '@context/state.ts'

type EffectFn<T> = (states: T) => T

export const effect = (effectFn: EffectFn<Object>) => {
  let states = {}
  stateContext.value = {
    component: currentComponent.value,
    type: 'USE_EFFECT',
    effectFn: () => {
      states = effectFn(states)
    },
  }
  states = effectFn(states)
  stateContext.value = null
}
