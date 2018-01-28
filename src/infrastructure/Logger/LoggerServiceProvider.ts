import { ContainerModule } from 'inversify'
import { container } from '../../ioc/container';
import { WinstonLogger } from './WinstonLogger'
import { ConsoleLogger } from './ConsoleLogger'
import { EmojiLogger } from './EmojiLogger'
import { Loggable } from './Loggable';

export const logTransportSymbol = Symbol.for('LogTransport')

export const provider = new ContainerModule((bind) => {
  // Interface -> Implementation
  bind<Loggable>(logTransportSymbol).to(WinstonLogger)
    .inSingletonScope()
    .whenTargetIsDefault()

  bind<Loggable>(logTransportSymbol).to(ConsoleLogger)
    .inSingletonScope()
    .whenTargetNamed('console')

  bind<Loggable>(logTransportSymbol).to(EmojiLogger)
    .inSingletonScope()
    .whenTargetNamed('🙆')
})

// Alias
export const alias = (name?: 'console'|'🙆') => !name
  ? container.get<Loggable>(logTransportSymbol)
  : container.getNamed<Loggable>(logTransportSymbol, name)
