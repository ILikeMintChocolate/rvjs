export type RvjsFunction<T extends Function> = T & {
  $$typeof: symbol
}

export type RvjsObject<T extends Object> = T & {
  $$typeof: symbol
}
