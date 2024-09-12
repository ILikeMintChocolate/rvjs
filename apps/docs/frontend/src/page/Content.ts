import Content from '@component/content/Content.ts'
import { useTableOfContentsRoot } from '@component/tableOfContents/sideBar/TableOfContents.hook.ts'
import TableOfContents from '@component/tableOfContents/sideBar/TableOfContents.ts'
import { useGetContent } from '@hook/useContent.ts'
import { usePathParams, useState } from '@rvjs/core'
import { Flex } from '@rvjs/ui'

const ContentData = async () => {
  const { pId, cId = 'gettingStarted', fId } = usePathParams()!
  const requestPath = [pId, cId, fId].filter(Boolean).join('/')
  const { content, headingIndex } = await useGetContent(requestPath)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const headingIndexWithoutTitle = headingIndex.slice(1)
  useTableOfContentsRoot(headingIndexWithoutTitle, setActiveIndex)

  window.scrollTo({
    top: 0,
  })

  return Flex({
    style: {
      flex: '1',
    },
    children: [
      Content({
        children: content,
      }),
      TableOfContents({
        headingIndex: headingIndexWithoutTitle,
        activeIndex,
      }),
    ],
  })
}

export default ContentData
