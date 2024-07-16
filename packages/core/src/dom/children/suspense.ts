import { Switch } from '@children/switch.ts'
import { Component } from '@component/componentBlock.ts'
import { Child } from '@dom/type.ts'
import { Element } from '@element/elementBlock.ts'
import { useState } from '@hook/useState.ts'

interface SuspenseProps {
  content: () => Promise<Element | Component>
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

  // @ts-ignore
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
