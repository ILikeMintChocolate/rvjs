import NoContentError from '@component/error/NoContentError.tsx'
import Loading from '@component/loading/Loading.tsx'
import { Case, GetState, Switch } from '@rvjs/core'

interface SuspenseProps {
  status: GetState<'LOADING' | 'LOADED' | 'ERROR'>
  children: JSX.Element
}

const Suspense = (props: SuspenseProps) => {
  return (
    <Switch>
      <Case is={props.status() === 'LOADING'}>
        <Loading />
      </Case>
      <Case is={props.status() === 'LOADED'}>{props.children}</Case>
      <Case is={props.status() === 'ERROR'}>
        <NoContentError />
      </Case>
    </Switch>
  )
}

export default Suspense
