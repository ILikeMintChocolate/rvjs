import { isUsingStateContext } from '@context/state.ts'
import { useEffect } from '@hook/useEffect.ts'
import { useState } from '@hook/useState.ts'

export const dynamic = <Value>(dynamicFn: () => Value) => {
  isUsingStateContext.length = 0
  const value = dynamicFn()
  if (isUsingStateContext.length > 0) {
    const dependencies = [...isUsingStateContext]
    const [newState, setState] = useState(value)
    useEffect(() => {
      setState(dynamicFn())
    }, dependencies)
    isUsingStateContext.length = 0
    return newState
  }
  return dynamicFn
}
