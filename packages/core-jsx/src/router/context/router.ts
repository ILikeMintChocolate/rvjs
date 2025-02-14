import { Context } from '@util/context.ts'

export const routerContext = new Context<{
  dynamicKeys: Record<string, string>
  queries: Record<string, string>
}>()
