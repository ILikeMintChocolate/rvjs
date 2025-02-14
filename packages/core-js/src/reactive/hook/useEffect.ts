import { GetState, isGetState } from '@hook/useState.ts'

export const useEffect = (
  callback: () => void,
  dependencies: (GetState | any)[],
) => {
  dependencies.forEach((dependency) => {
    if (isGetState(dependency)) {
      dependency({
        type: 'useEffect',
        property: 'useEffect',
        value: callback,
      })
    }
  })
}
