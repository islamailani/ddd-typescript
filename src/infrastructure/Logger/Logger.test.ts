import { Loggable } from './Loggable'

describe('Logger', () => {
  it('it should call the transports info method with the correct arguments', () => {

    const mockTransport = jest.fn<Loggable>(() => ({
      info: jest.fn(),
    }));

    const mock = new mockTransport;

    const logger = new Logger(mock)
    logger.info('foo')

    expect(mock.info).toBeCalledWith('foo')
  })

  it('it should call the transports error method with the correct arguments', () => {

    const mockTransport = jest.fn<Loggable>(() => ({
      error: jest.fn(),
    }));

    const mock = new mockTransport;

    const logger = new Logger(mock)
    logger.error('foo')

    expect(mock.error).toBeCalledWith('foo')
  })
})
