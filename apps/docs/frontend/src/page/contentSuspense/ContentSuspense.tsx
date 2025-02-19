import Content from '@component/content/Content.tsx'
import Suspense from '@component/suspense/Suspense.tsx'
import TableOfContents from '@component/tableOfContents/sideBar/TableOfContents.tsx'
import { contentSuspense_style } from '@page/contentSuspense/ContentSuspense.css.ts'
import {
  useContentHeading,
  useContentSuspense,
  useContentSuspenseScroll,
} from '@page/contentSuspense/ContentSuspense.hook.ts'
import { renderFromJSON } from '@rvjs/ui'

const ContentSuspense = () => {
  const { status, content } = useContentSuspense()
  const { wrapperElement, headingContexts } = useContentHeading(status)
  useContentSuspenseScroll(status)

  return (
    <div className={contentSuspense_style} element={wrapperElement}>
      <Content>
        <Suspense status={status}>{renderFromJSON(content())}</Suspense>
      </Content>
      <TableOfContents headingContexts={headingContexts} />
    </div>
  )
}

export default ContentSuspense
