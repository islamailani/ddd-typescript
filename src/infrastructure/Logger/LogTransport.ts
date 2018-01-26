export interface LogTransport {
  info(message: string): void
  error(message: string): void
}

export const logTransportSymbol = Symbol.for('LogTransport')
