import { currentComponent } from '@context/component.ts'

export const onMount = (handler: Function) => {
  currentComponent.value.onMountHandler = handler
}
