import { injectable, inject } from 'inversify'
import { LogTransport, logTransportSymbol } from './LogTransport'

@injectable()
export class Logger {

  constructor (
    @inject(logTransportSymbol)
    private transport: LogTransport
  ) {}

  info(message: string) {
    this.transport.info(message)
  }

  error(message: string) {
    this.transport.error(message)
  }
}
