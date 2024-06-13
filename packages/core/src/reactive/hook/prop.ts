import { isUsingState } from '@context/executionContext.ts'
import { useEffect } from '@hook/useEffect.ts'
import { useState } from '@hook/useState.ts'

export type Prop<Value> = () => Value

export const prop = <Value>(propFn: () => Value) => {
  isUsingState.set(null)
  const propResult = propFn()
  const parentGetState = isUsingState.get()
  isUsingState.set(null)

  if (parentGetState) {
    const [newState, setState] = useState(propResult)

    useEffect(() => {
      setState(propFn())
    }, [parentGetState])

    return newState
  }

  return propFn
}
