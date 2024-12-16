// import { renderComponentFromJSON } from '@rvjs/ui'
// import { getApiPath } from '@util/api.ts'
// import {
//   getItemFromCache,
//   hasItemCache,
//   isCacheExpired,
//   storeItemToCache,
// } from '@util/cache.ts'
//
// export const useGetContent = async (path: string) => {
//   const apiPath = getApiPath(`${path}.json`)
//   const { content: rawContent } = await getContent(apiPath)
//   const { blocks: renderedContent, context } = renderComponentFromJSON(
//     rawContent,
//     {
//       indexHeading: true,
//     },
//   )
//   return { content: renderedContent, headingIndex: context.headingIndex }
// }
//
