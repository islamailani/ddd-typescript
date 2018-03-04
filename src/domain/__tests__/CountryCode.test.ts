
import { CountryCode } from '../identity/CountryCode'
import { IllegalArgumentException } from '../IllegalArgumentException'

it('should throw when passing in a invalid country code', () => {
    const createCountryCode = () => {
        return new CountryCode('foo')
    }

    expect(createCountryCode).toThrowError('"foo" is not a valid Alpha2 country')
    expect(createCountryCode).toThrowError(IllegalArgumentException)
})

it('should equal an email with the same value.', () => {
    const code1 = new CountryCode('nl')
    const code2 = new CountryCode('nl')

    expect(code1.equals(code2)).toBe(true)
})

it('should not equal an email with a different value.', () => {
    const code1 = new CountryCode('nl')
    const code2 = new CountryCode('us')

    expect(code1.equals(code2)).toBe(false)
})

it('should be able to return the fullname of the country', () => {
    const theNetherlands = new CountryCode('nl')

    expect(theNetherlands.getCountryName()).toBe('Netherlands')
})
