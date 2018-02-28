import { FullName } from '../identity/FullName'

it('should create a full name with from mutiple arguments.', () => {
    const fullname = new FullName('Rick', 'Lancee')
    expect(fullname.getFullName()).toEqual('Rick Lancee')
})

it('should equal an fullname with the same value.', () => {
    const fullname1 = new FullName('Rick', 'Lancee')
    const fullname2 = new FullName('Rick', 'Lancee')

    expect(fullname1.equals(fullname2)).toBe(true)
})

it('should equal an fullname with the same value.', () => {
    const fullname1 = new FullName('Rick', 'Lancee')
    const fullname2 = new FullName('Bryan', 'te', 'Beek')
    expect(fullname1.equals(fullname2)).toBe(false)
})
