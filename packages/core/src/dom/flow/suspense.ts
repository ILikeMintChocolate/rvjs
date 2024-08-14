import { ComponentBlock } from '@block/component.ts'
import { ElementBlock } from '@block/element.ts'
import { Switch } from '@flow/switch.ts'
import { useState } from '@hook/useState.ts'
import { Child } from '@type/type.ts'

interface SuspenseProps {
  content: () => Promise<ElementBlock | ComponentBlock>
  loading?: Child
  error?: Child
}

type Status = 'pending' | 'resolved' | 'rejected'

export const Suspense = (props: SuspenseProps) => {
  const { loading, error, content } = props
  const [status, setStatus] = useState<Status>('pending')
  const [contentEl, setContentEl] = useState<Child | null>(null)

  content()
    .then((result) => {
      setContentEl(result)
      setStatus('resolved')
    })
    .catch(() => {
      setStatus('rejected')
    })

  return Switch(status, () => {
    if (status() === 'pending') {
      return loading ?? null
    } else if (status() === 'resolved') {
      return contentEl()
    } else if (status() === 'rejected') {
      return error ?? null
    }
    return null
  })
}
