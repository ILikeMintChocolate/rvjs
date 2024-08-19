type ErrorType =
  | 'CREATE_CONTEXT_NOT_IN_COMPONENT_ERROR'
  | 'USE_GLOBAL_STATE_NOT_IN_COMPONENT_ERROR'
  | 'ON_MOUNT_NOT_IN_COMPONENT_ERROR'
  | 'ON_DESTROY_NOT_IN_COMPONENT_ERROR'
  | 'USE_OUTLET_NOT_IN_COMPONENT_ERROR'
  | 'USE_QUERY_PARAMS_NOT_IN_COMPONENT_ERROR'

const errorMessages: Record<ErrorType, string> = {
  CREATE_CONTEXT_NOT_IN_COMPONENT_ERROR:
    'The `createContext` hook can only be used inside components.',
  USE_GLOBAL_STATE_NOT_IN_COMPONENT_ERROR:
    'The `useGlobalState` hook can only be used inside components.',
  ON_MOUNT_NOT_IN_COMPONENT_ERROR:
    'The `onMount` lifecycle hook can only be used inside components.',
  ON_DESTROY_NOT_IN_COMPONENT_ERROR:
    'The `onDestroy` lifecycle hook can only be used inside components.',
  USE_OUTLET_NOT_IN_COMPONENT_ERROR:
    'The `useOutlet` hook can only be used inside components.',
  USE_QUERY_PARAMS_NOT_IN_COMPONENT_ERROR:
    'The `useQueryParams` hook can only be used inside components.',
}

export const throwError = (type: ErrorType) => {
  throw new Error(errorMessages[type])
}
