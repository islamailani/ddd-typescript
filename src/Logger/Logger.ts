import { injectable, inject, named } from 'inversify'
import { LogTransport, LogTransportSymbol } from './LogTransport'

@injectable()
export class Logger {

  @inject(LogTransportSymbol) @named('🙈')
  private transport: LogTransport

  info(message: string) {
    this.transport.info(message)
  }

  error(message: string) {
    this.transport.error(message)
  }
}
