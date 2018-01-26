import { LogTransport } from './LogTransport'
import { Logger } from './Logger'

describe('Logger', () => {
  it('it should call the transports info method with the correct arguments', () => {

    const mockTransport = jest.fn<LogTransport>(() => ({
      info: jest.fn(),
    }));

    const mock = new mockTransport;

    const logger = new Logger(mock)
    logger.info('foo')

    expect(mock.info).toBeCalledWith('foo')
  })

  it('it should call the transports error method with the correct arguments', () => {

    const mockTransport = jest.fn<LogTransport>(() => ({
      error: jest.fn(),
    }));

    const mock = new mockTransport;

    const logger = new Logger(mock)
    logger.error('foo')

    expect(mock.error).toBeCalledWith('foo')
  })
})
