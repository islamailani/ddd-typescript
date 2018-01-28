import { injectable } from 'inversify'
import { Loggable } from './Loggable'

@injectable()
export class ConsoleLogger implements Loggable {

  info(message: string) {
    console.info(message)
  }

  error(message: string) {
    console.error(message)
  }
}
