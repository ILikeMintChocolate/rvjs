import IndexButton from '@component/tableOfContents/IndexButton/IndexButton.tsx'
import { tableOfContents_style } from '@component/tableOfContents/sideBar/TableOfContents.css.ts'
import { For, useState } from '@rvjs/core'

interface TableOfContentsProps {
  headings: HTMLHeadingElement[]
}

const TableOfContents = (props: TableOfContentsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <aside className={tableOfContents_style}>
      <For each={props.headings}>
        {(heading, index) => {
          return (
            <IndexButton
              heading={heading}
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
