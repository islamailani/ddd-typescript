import { Container, ContainerModule } from 'inversify'

// Interfaces
import { LogTransport, LogTransportSymbol } from '../Logger/LogTransport'

// Concretions
import { ConsoleLogger } from '../Logger/ConsoleLogger'
import { Logger } from '../Logger/Logger'
import { EmojiLogger } from '../Logger/EmojiLogger'
import { WinstonLogger } from '../Logger/WinstonLogger'

// Bind application dependencies
const applicationDependencies = new ContainerModule((bind) => {
  // Interface -> Implementation
  bind<LogTransport>(LogTransportSymbol).to(ConsoleLogger).whenTargetIsDefault()
  bind<LogTransport>(LogTransportSymbol).to(EmojiLogger).whenTargetNamed('🙆')
  bind<LogTransport>(LogTransportSymbol).to(WinstonLogger).whenTargetNamed('🙈')

  // Implementation binding
  bind<Logger>(Logger).toSelf().inSingletonScope()
})

const container = new Container()

container.load(applicationDependencies)

// Aliases
const logger = () => container.get<Logger>(Logger)

export {
  container,
  logger,
}
