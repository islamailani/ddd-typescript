import { injectable } from "inversify";
import { LogTransport } from "./LogTransport";

@injectable()
export class EmojiLogger implements LogTransport {
  constructor() {
    console.log('emoji');
  }

  info(message: string) {
    console.log('🙆  ' + message)
  }

  error(message: string) {
    console.log('🚫  ' + message)
  }

}
