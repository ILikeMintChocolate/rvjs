const VALIDATOR_TYPE = {
  isString: 'string',
  isNumber: 'number',
  isBigint: 'bigint',
  isBoolean: 'boolean',
  isUndefined: 'undefined',
  isSymbol: 'symbol',
  isNull: 'null',
  isArray: 'array',
  isObject: 'object',
  isFunction: 'function',
  isDate: 'date',
  isRegExp: 'regexp',
  isError: 'error',
  isPromise: 'promise',
  isSet: 'set',
  isMap: 'map',
  isWeakSet: 'weakset',
  isWeakMap: 'weakmap',
}

export const createInvalidTypeErrorMessage = (
  key: string,
  value: any,
  validateFunctionName: string,
) => {
  // @ts-ignore
  const type = VALIDATOR_TYPE[validateFunctionName]

  if (!type) {
    return `Invalid prop "${key}" with value ${value}. Expected ${validateFunctionName} validator`
  }

  return `Invalid prop "${key}" with value ${value}. Expected ${type}`
}

export const createNoValidatorErrorMessage = (key: string) => {
  return `No validator found for prop "${key}"`
}

export const createUndefinedPropErrorMessage = (key: string) => {
  return `Undefined prop "${key}"`
}
