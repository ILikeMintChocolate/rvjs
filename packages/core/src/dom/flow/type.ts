import { GetState } from '@hook/useState.ts'

export interface FlowProps<Dep> {
  dependency: Dep | GetState<Dep>
}
