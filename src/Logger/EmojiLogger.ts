import { injectable } from "inversify";
import { LogTransport } from "./LogTransport";

@injectable()
export class EmojiLogger implements LogTransport {

  log(message: string) {
    console.log(' 🎉 🙆 🎉 ' + message.split(/\s/).join(' 🎉 🙆 🎉 ') + ' 🎉 🙆 🎉 ')
  }

}
