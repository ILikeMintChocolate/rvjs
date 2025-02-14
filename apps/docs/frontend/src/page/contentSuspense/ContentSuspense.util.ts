import {
  getItemFromCache,
  hasItemCache,
  isCacheExpired,
  storeItemToCache,
} from '@util/cache.ts'

export const getContentFromServer = async (path: string) => {
  const apiPath = getApiPath(path)
  if (hasItemCache(apiPath) && !isCacheExpired(apiPath)) {
    const content = getItemFromCache(apiPath)
    return content
  } else {
    const content = await fetchContent(apiPath)
    storeItemToCache(apiPath, content, 3600)
    return content
  }
}

const getApiPath = (path: string) => {
  return `https://rvjs.xyz/content${path}`
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
