import IndexButton from '@component/tableOfContents/indexButton/IndexButton.ts'
import { tableOfContents_style } from '@component/tableOfContents/sideBar/TableOfContents.css.ts'
import { useTableOfContents } from '@component/tableOfContents/sideBar/TableOfContents.hook.ts'
import { Block, For, GetState, prop } from '@rvjs/core'
import { Flex } from '@rvjs/ui'

interface TableOfContentsProps {
  headingIndex: Block[]
  activeIndex: GetState<number>
}

const TableOfContents = (props: TableOfContentsProps) => {
  const { headingIndex, activeIndex } = props
  const headings = useTableOfContents(headingIndex)
  const indexButtonLevel = {
    prevTagLevel: 1,
    level: -1,
  }

  return Flex({
    as: 'aside',
    classes: [prop(() => tableOfContents_style)],
    children: [
      For(headings, (heading, index) => {
        return IndexButton({
          heading,
          currentIndex: index,
          activeIndex,
          indexButtonLevel,
        })
      }),
    ],
  })
}

export default TableOfContents
