import { Container } from 'inversify'

// Import framework service providers
import {
  provider as logProvider,
  alias as logger
} from 'infrastructure/Logger/LoggerServiceProvider'

// Services to bind
import { AuthService } from 'domain/access/services/AuthService'
import { UserService } from 'domain/access/services/UserService'

const container = new Container()

container.load(
  logProvider
)

container.bind<AuthService>(AuthService)
    .toSelf()
    .inSingletonScope()

container.bind<UserService>(UserService)
    .toSelf()
    .inSingletonScope()

export {
  container,
  // Aliases
  logger,
}
