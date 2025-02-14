import { useGlobalState } from '@rvjs/core'

export const overrideConsoleLog = () => {
  const originalConsoleLog = console.log
  const originalConsoleError = console.error
  const [logs, setLogs] = useGlobalState<string[]>('LOGS', [])

  console.log = (...args) => {
    originalConsoleLog.apply(console, args)
    addLogMessage(args)
  }

  console.error = (...args) => {
    originalConsoleError.apply(console, args)
    setLogs([...logs(), args[0]])
  }

  const addLogMessage = (logArgs: any[]) => {
    const logMessage = logArgs
      .map((arg) => (typeof arg === 'string' ? arg : JSON.stringify(arg)))
      .join(' ')
    setLogs([...logs(), logMessage])
  }
}
