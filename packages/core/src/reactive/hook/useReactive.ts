import { dynamic, Dynamic, isDynamic } from '@hook/dynamic.ts'
import { GetState, isGetState } from '@hook/useState.ts'

export type Reactive<Value> = Value | GetState<Value> | Dynamic<Value>

export const useReactive = <Value, ReturnType>(
  value: Reactive<Value>,
  asValue: (value: Value) => ReturnType,
  asDynamic: (value: GetState<Value>) => ReturnType,
) => {
  if (isGetState(value)) {
    // @ts-ignore
    return dynamic(() => asDynamic(value)) as Dynamic<ReturnType>
  } else if (isDynamic(value)) {
    return value as Dynamic<ReturnType>
  } else {
    return asValue(value) as ReturnType
  }
}
