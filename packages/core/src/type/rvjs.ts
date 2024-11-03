export type RvjsObject<T extends Object> = T & {
  $$typeof: symbol
}
