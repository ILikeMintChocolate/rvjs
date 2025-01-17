import { currentComponent } from '@context/component.ts'

export const onDestroy = (handler: Function) => {
  currentComponent.value.onDestroyHandler = handler
}
