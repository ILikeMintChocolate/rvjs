import IndexButton from '@component/tableOfContents/IndexButton/IndexButton.tsx'
import { tableOfContents_style } from '@component/tableOfContents/sideBar/TableOfContents.css.ts'
import { HeadingContext } from '@page/contentSuspense/ContentSuspense.hook.ts'
import { For, GetState, useState } from '@rvjs/core'

interface TableOfContentsProps {
  headingContexts: GetState<HeadingContext[]>
}

const TableOfContents = (props: TableOfContentsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <aside className={tableOfContents_style}>
      <For each={props.headingContexts()}>
        {(headingContext, index) => {
          return (
            <IndexButton
              heading={headingContext.heading}
              currentIndex={index()}
              activeIndex={activeIndex()}
              setActiveIndex={setActiveIndex}
            />
          )
        }}
      </For>
    </aside>
  )
}

export default TableOfContents
