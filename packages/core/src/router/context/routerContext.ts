import { Route } from '@router/util/event.ts'
import { Context } from '@util/context.ts'

export const routeContext = new Context<Omit<Route, 'component'>>()
