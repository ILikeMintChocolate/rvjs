import { renderComponentFromJSON } from '@rvjs/ui/util'
import { getApiPath } from '@util/api.ts'

export const useGetContent = async (path: string) => {
  const apiPath = getApiPath(path)
  const rawContent = await fetchContent(apiPath)
  const renderedContent = renderComponentFromJSON(rawContent)
  return renderedContent
}

export const fetchContent = async (path: string) => {
  const response = await fetch(path, { cache: 'force-cache' })
  if (!response.ok) {
    throw new Error(`Failed to fetch content: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}
