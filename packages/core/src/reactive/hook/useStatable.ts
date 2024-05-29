import { dynamic } from '@hook/dynamic.ts'
import { GetState, isGetState } from '@hook/useState.ts'

export type Statable<Type> = Type | GetState<Type>

export const useStatable = <Type, AsDynamic, AsValue>(
  statable: Statable<Type>,
  asDynamic: (state: GetState<Type>) => AsDynamic,
  asValue: (value: Type) => AsValue,
) => {
  if (isGetState(statable)) {
    return dynamic(() => asDynamic(statable))
  }

  return asValue(statable)
}
