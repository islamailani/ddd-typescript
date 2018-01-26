import { Container, ContainerModule } from 'inversify'
import { LogTransport, logTransportSymbol } from '../infrastructure/Logger/LogTransport';
import { ConsoleLogger } from '../infrastructure/Logger/ConsoleLogger';
import { EmojiLogger } from '../infrastructure/Logger/EmojiLogger';
import { WinstonLogger } from '../infrastructure/Logger/WinstonLogger';
import { Logger } from '../infrastructure/Logger/Logger';

// Interfaces

// Concretions

// Bind application dependencies
const applicationDependencies = new ContainerModule((bind) => {
  // Interface -> Implementation
  bind<LogTransport>(logTransportSymbol).to(WinstonLogger).whenTargetIsDefault()
  bind<LogTransport>(logTransportSymbol).to(ConsoleLogger).whenTargetNamed('console')
  bind<LogTransport>(logTransportSymbol).to(EmojiLogger).whenTargetNamed('🙆')

  // Implementation binding
  bind<Logger>(Logger).toSelf().inSingletonScope()
})

const container = new Container()

container.load(applicationDependencies)

// Aliases
export const logger = () => container.get<Logger>(Logger)

export { container }
