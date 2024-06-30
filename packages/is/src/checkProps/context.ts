export interface CheckContext {
  prop: {
    key: string
    value: unknown
  } | null
  isContinue: boolean
}

export const checkContext: CheckContext = { prop: null, isContinue: true }
