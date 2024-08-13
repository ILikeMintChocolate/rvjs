import { renderComponentFromJSON } from '@rvjs/ui'
import { getApiPath } from '@util/api.ts'

const contentCache = {}

export const useGetContent = async (path: string) => {
  const apiPath = getApiPath(path)
  if (contentCache[apiPath]) {
    return contentCache[apiPath]
  }
  const rawContent = await fetchContent(apiPath)
  const { blocks: renderedContent, context } = renderComponentFromJSON(
    rawContent,
    {
      indexHeading: true,
    },
  )
  contentCache[apiPath] = {
    content: renderedContent,
    headingIndex: context.headingIndex,
  }
  return { content: renderedContent, headingIndex: context.headingIndex }
}

export const fetchContent = async (path: string) => {
  const response = await fetch(path, {
    cache: 'force-cache',
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch content: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}
