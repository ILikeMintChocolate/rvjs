import { Dynamic } from '@hook/dynamic.ts'
import { GetState } from '@hook/useState.ts'

export type Reactive<Type> = Type | GetState<Type> | Dynamic<Type>
