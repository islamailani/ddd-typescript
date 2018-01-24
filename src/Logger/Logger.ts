import { injectable, inject, named } from "inversify";
import { LogTransport } from "./LogTransport";

@injectable()
export class Logger {

  @inject("LogTransport") @named('🙆')
  private transport: LogTransport

  log(message: string) {
    this.transport.log(message)
  }
}
