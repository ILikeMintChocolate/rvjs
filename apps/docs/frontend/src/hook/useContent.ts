import { renderComponentFromJSON } from '@rvjs/ui'
import { getApiPath } from '@util/api.ts'
import {
  getItemFromCache,
  hasItemCache,
  isCacheExpired,
  storeItemToCache,
} from '@util/cache.ts'

export const useGetContent = async (path: string) => {
  const apiPath = getApiPath(`${path}.json`)
  const { content: rawContent } = await getContent(apiPath)
  const { blocks: renderedContent, context } = renderComponentFromJSON(
    rawContent,
    {
      indexHeading: true,
    },
  )
  return { content: renderedContent, headingIndex: context.headingIndex }
}

export const getContent = async (path: string) => {
  if (hasItemCache(path) && !isCacheExpired(path)) {
    const content = getItemFromCache(path)
    return content
  } else {
    const content = await fetchContent(path)
    storeItemToCache(path, content, 3600)
    return content
  }
}

const fetchContent = async (path: string) => {
  const response = await fetch(path, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch content: ${response.statusText}`)
  }
  const content = await response.json()
  return content
}
