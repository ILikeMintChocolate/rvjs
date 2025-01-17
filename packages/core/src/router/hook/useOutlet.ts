import { currentComponent } from '@context/component.ts'

export const useOutlet = () => {
  return currentComponent.value.outlet
}
