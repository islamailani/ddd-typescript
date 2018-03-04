import { injectable } from 'inversify'
import { Loggable } from './Loggable'

@injectable()
export class ConsoleLogger implements Loggable {

    public info(message: string) {
        // tslint:disable-next-line:no-console
        console.info(message)
    }

    public error(message: string) {
        // tslint:disable-next-line:no-console
        console.error(message)
    }
}
