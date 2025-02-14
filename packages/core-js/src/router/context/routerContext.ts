import { Route } from '@router/util/event.ts'
import { Context } from '@util/context.ts'

export const routeContext = new Context<Omit<Route, 'component'>>()
export const pathParamsContext = new Context<Record<string, string>>({})
