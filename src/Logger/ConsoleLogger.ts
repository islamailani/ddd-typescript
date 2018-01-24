import { injectable } from 'inversify';
import { LogTransport } from './LogTransport';

@injectable()
export class ConsoleLogger implements LogTransport {

  log(message: string) {
    console.log(message)
  }

}
