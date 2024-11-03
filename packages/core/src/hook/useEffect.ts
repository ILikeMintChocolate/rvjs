import { componentContext } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { GetState } from '@hook/useState.ts'
import { isGetState } from '@type/guard.ts'

export const useEffect = (
  callback: () => void,
  dependencies: (GetState<unknown> | unknown)[],
) => {
  dependencies.forEach((dependency) => {
    if (isGetState(dependency)) {
      stateContext.set({
        component: componentContext.get(),
        type: 'USE_EFFECT',
        effectFn: callback,
      })
      dependency()
      stateContext.clear()
    }
  })
}
