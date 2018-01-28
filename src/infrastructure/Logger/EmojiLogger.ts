import { injectable } from 'inversify'
import { Loggable } from './Loggable'

@injectable()
export class EmojiLogger implements Loggable {

  info(message: string) {
    console.log('🙆  ' + message)
  }

  error(message: string) {
    console.log('🚫  ' + message)
  }
}
