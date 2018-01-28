import { injectable } from 'inversify'
import { Loggable } from './Loggable'

import chalk from 'chalk'
import { Logger, transports, config, LoggerInstance } from 'winston'

@injectable()
export class WinstonLogger implements Loggable {

  private logger: LoggerInstance

  constructor() {
    this.logger = new Logger({
      transports: [
        new transports.Console({
          timestamp: () => (new Date).toISOString(),
          formatter: (options) => {
            const level = config.colorize(options.level, options.level.toUpperCase().padEnd(5))
            const timestamp = options.timestamp()
            const message = options.message
            const meta = options.meta && Object.keys(options.meta).length
              ? `\n${JSON.stringify(options.meta, null, 4)}` : ''

            return `${level} ${chalk.gray(timestamp)} ${message} ${chalk.gray(meta)}`
          },
        }),
      ],
    })
  }

  info(message: string) {
    this.logger.info(message)
  }

  error(message: string) {
    this.logger.error(message)
  }
}
