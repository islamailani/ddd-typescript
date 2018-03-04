import { Container } from 'inversify'

// Import service providers
import {
  provider as logProvider,
  alias as logger
} from 'infrastructure/Logger/LoggerServiceProvider'
import { User } from 'domain/access/User'
import { AuthService } from 'domain/access/AuthService'

const container = new Container()

container.load(
  logProvider
)

container.bind<User>(User).toSelf()
container.bind<AuthService>(AuthService)
    .toSelf()
    .inSingletonScope()


export {
  container,
  // Aliases
  logger,
}
