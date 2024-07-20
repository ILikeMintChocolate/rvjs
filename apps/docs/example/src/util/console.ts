import { useGlobalState } from '@rvjs/core/reactive'

export const overrideConsoleLog = () => {
  const originalConsoleLog = console.log
  const [logs, setLogs] = useGlobalState<string[]>('LOGS', [])

  console.log = (...args) => {
    originalConsoleLog.apply(console, args)
    addLogMessage(args)
  }

  const addLogMessage = (logArgs: any[]) => {
    const logMessage = logArgs
      .map((arg) => (typeof arg === 'string' ? arg : JSON.stringify(arg)))
      .join(' ')
    setLogs([...logs(), logMessage])
  }
}
