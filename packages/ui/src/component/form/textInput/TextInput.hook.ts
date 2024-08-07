import { isGetState, onMount, Prop, useEffect, useRef } from '@rvjs/core'

const useTextInput = (disabled: Prop<boolean>) => {
  const inputRef = useRef<HTMLInputElement>()

  const setInputDisabled = () => {
    if (inputRef.current) {
      if (
        (isGetState(disabled) && disabled() === true) ||
        disabled() === true
      ) {
        inputRef.current.setAttribute('disabled', '')
      } else {
        inputRef.current.removeAttribute('disabled')
      }
    }
  }

  onMount(() => {
    setInputDisabled()
  })

  useEffect(() => {
    setInputDisabled()
  }, [disabled])

  return { inputRef }
}

export default useTextInput
