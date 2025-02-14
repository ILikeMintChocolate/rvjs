import IndexButton from '@component/tableOfContents/IndexButton/IndexButton.tsx'
import { tableOfContents_style } from '@component/tableOfContents/sideBar/TableOfContents.css.ts'
import { HeadingContext } from '@page/contentSuspense/ContentSuspense.hook.ts'
import { For, GetState } from '@rvjs/core'

interface TableOfContentsProps {
  headingContexts: GetState<HeadingContext[]>
}

const TableOfContents = (props: TableOfContentsProps) => {
  return (
    <aside className={tableOfContents_style}>
      <For each={props.headingContexts()}>
        {(headingContext) => {
          return <IndexButton heading={headingContext.heading} />
        }}
      </For>
    </aside>
  )
}

export default TableOfContents
