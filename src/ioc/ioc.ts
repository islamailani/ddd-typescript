import { Container, ContainerModule } from 'inversify'

// Interfaces
import { LogTransport } from '../Logger/LogTransport';

// Concretions
import { ConsoleLogger } from '../Logger/ConsoleLogger';
import { Logger } from '../Logger/Logger';
import { EmojiLogger } from '../Logger/EmojiLogger';

// Bind dependencies
const applicationDependencies = new ContainerModule((bind) => {
  // Interface -> Implementation
  bind<LogTransport>('LogTransport').to(ConsoleLogger).whenTargetIsDefault()
  bind<LogTransport>('LogTransport').to(EmojiLogger).whenTargetNamed('🙆')

  // Implementation -> Implementation
  bind<Logger>('Logger').to(Logger).inSingletonScope()
})

const container = new Container()

container.load(applicationDependencies)

// Aliases
const logger = () => container.get<Logger>('Logger');

export {
  container,
  logger,
}
