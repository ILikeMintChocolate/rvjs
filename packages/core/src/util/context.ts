export class Context<Context> {
  context: Context | null

  constructor(context?: Context) {
    this.context = context ?? null
  }

  has() {
    return this.context !== null
  }

  get() {
    return this.context
  }

  set(newContext: Context | null) {
    this.context = newContext
  }

  clear() {
    this.context = null
  }
}
