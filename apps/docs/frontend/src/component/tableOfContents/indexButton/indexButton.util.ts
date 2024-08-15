import { LinkProps } from '@component/tableOfContents/indexButton/IndexButton.ts'

export const calcIndexButtonLevel = (
  element: LinkProps['heading']['element'],
  indexButtonLevel: LinkProps['indexButtonLevel'],
) => {
  const { prevTagLevel } = indexButtonLevel
  const headingTagLevel = Number(element.tagName[1])
  if (prevTagLevel < headingTagLevel) {
    indexButtonLevel.level++
  } else if (prevTagLevel > headingTagLevel) {
    indexButtonLevel.level--
  }
  indexButtonLevel.prevTagLevel = headingTagLevel
  return indexButtonLevel.level
}
