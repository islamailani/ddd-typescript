import { UserId } from '../access/UserId'

jest.mock('uuid/v4', () => () => 'foo')

it('should generate a v4 uuid on construction.', () => {
    const id = new UserId()
    expect(id.getId()).toEqual('foo')
})

it('should equal an id with the same value.', () => {
    const id1 = new UserId()
    const id2 = new UserId()
    expect(id1.equals(id2)).toBe(true)
})
