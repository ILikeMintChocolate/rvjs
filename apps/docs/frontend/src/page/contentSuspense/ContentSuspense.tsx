import Content from '@component/content/Content.tsx'
import NoContentError from '@component/error/NoContentError.tsx'
import Loading from '@component/loading/Loading.tsx'
import TableOfContents from '@component/tableOfContents/sideBar/TableOfContents.tsx'
import { contentSuspense_style } from '@page/contentSuspense/ContentSuspense.css.ts'
import {
  useContentHeading,
  useContentSuspense,
} from '@page/contentSuspense/ContentSuspense.hook.ts'
import { Case, Switch } from '@rvjs/core'
import { renderFromJSON } from '@rvjs/ui'

const ContentSuspense = () => {
  const { status, content } = useContentSuspense()
  const { wrapperElement, headings } = useContentHeading(status)

  return (
    <div className={contentSuspense_style} element={wrapperElement}>
      <Switch>
        <Case is={status() === 'LOADING'}>
          <Loading />
        </Case>
        <Case is={status() === 'LOADED'}>
          <Content>{renderFromJSON(content())}</Content>
        </Case>
        <Case is={status() === 'ERROR'}>
          <NoContentError />
        </Case>
      </Switch>
      <TableOfContents headings={headings()} />
    </div>
  )
}

export default ContentSuspense
