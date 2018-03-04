
import { Address } from '../identity/Address'
import { IllegalArgumentException } from '../IllegalArgumentException'
import { CountryCode } from '../identity/CountryCode'

it('should throw when passing in a invalid country code', () => {
    const createAddress = () => {
        return new Address(
            new CountryCode('foo'),
            'Rick Lancee',
            'Lifely B.V.',
            'Noord-Holland',
            'Amsterdam',
            '1014BM',
            'Zekeringstraat 23B'
        )
    }

    expect(createAddress).toThrowError('"foo" is not a valid Alpha2 country')
    expect(createAddress).toThrowError(IllegalArgumentException)
})

it('should be able to return contructed name parts', () => {
    const address = new Address(
        new CountryCode('nl'),
        'Rick Lancee',
        'Lifely B.V.',
        'Noord-Holland',
        'Amsterdam',
        '1014BM',
        'Zekeringstraat 23B'
    )

    expect({
        country: 'Netherlands',
        nameLine: 'Rick Lancee',
        organisationName: 'Lifely B.V.',
        administrativeArea: 'Noord-Holland',
        locality: 'Amsterdam',
        postalCode: '1014BM',
        thoroughfare: 'Zekeringstraat 23B',
        premise: undefined,
    }).toMatchObject(address.getAddressParts())
})

it('should expect two same addresses to be the same', () => {
    const address1 = new Address(
        new CountryCode('nl'),
        'Rick Lancee',
        'Lifely B.V.',
        'Noord-Holland',
        'Amsterdam',
        '1014BM',
        'Zekeringstraat 23B'
    )

    const address2 = new Address(
        new CountryCode('nl'),
        'Rick Lancee',
        'Lifely B.V.',
        'Noord-Holland',
        'Amsterdam',
        '1014BM',
        'Zekeringstraat 23B'
    )

    expect(address1.equals(address2)).toBe(true)
})

it('should expect two different addresses to not be the same', () => {
    const address1 = new Address(
        new CountryCode('gb'),
        'Rick Lancee',
        'Lifely B.V.',
        'Noord-Holland',
        'Amsterdam',
        '1014BM',
        'Zekeringstraat 23B'
    )

    const address2 = new Address(
        new CountryCode('nl'),
        'Rick Lancee',
        'Lifely B.V.',
        'Noord-Holland',
        'Amsterdam',
        '1014BM',
        'Zekeringstraat 23B'
    )

    expect(address1.equals(address2)).toBe(false)
})
