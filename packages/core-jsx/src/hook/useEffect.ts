import { currentComponent } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { GetState } from '@hook/useState.ts'
import { isGetState } from '@type/guard.ts'

export const useEffect = (
  callback: () => void,
  dependencies: (GetState<unknown> | unknown)[],
) => {
  for (const dependency of dependencies) {
    if (isGetState(dependency)) {
      stateContext.value = {
        component: currentComponent.value,
        type: 'USE_EFFECT',
        effectFn: callback,
      }
      dependency()
      stateContext.value = null
    }
  }
}
