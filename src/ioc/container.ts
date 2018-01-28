import { Container } from 'inversify'

// Import service providers
import {
  provider as logProvider,
  alias as logger
} from '../infrastructure/Logger/LoggerServiceProvider'

const container = new Container()

container.load(
  logProvider
)

export {
  container,
  // Aliases
  logger,
}
