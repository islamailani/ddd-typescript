import { injectable } from 'inversify';
import { LogTransport } from './LogTransport';

@injectable()
export class ConsoleLogger implements LogTransport {
  constructor() {
    console.log('console');
  }
  info(message: string) {
    console.info(message)
  }

  error(message: string) {
    console.error(message)
  }

}
