import { injectable } from 'inversify'
import { Loggable } from './Loggable'

@injectable()
export class EmojiLogger implements Loggable {

    public info(message: string) {
        // tslint:disable-next-line:no-console
        console.log(`🙆  ${message}`)
    }

    public error(message: string) {
        // tslint:disable-next-line:no-console
        console.log(`🚫  ${message}`)
    }
}
