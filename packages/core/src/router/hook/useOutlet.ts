import { componentContext } from '@context/component.ts'

export const useOutlet = () => {
  const component = componentContext.get()
  return component.outlet
}
