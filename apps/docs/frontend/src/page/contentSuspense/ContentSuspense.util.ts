import { Storage } from '@util/storage.ts'

const storage = new Storage()

export const getContentFromServer = async (path: string) => {
  const apiPath = getApiPath(path)
  const item = storage.getItem(apiPath)
  if (item) {
    return item
  }
  const content = await fetchContent(apiPath)
  storage.setItem(apiPath, content, 600)
  return content
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
