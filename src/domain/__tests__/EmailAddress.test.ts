
import { EmailAddress } from '../identity/EmailAddress'
import { IllegalArgumentException } from '../IllegalArgumentException'

it('should throw when passing in a empty string', () => {
    const createEmail = () => {
        new EmailAddress('')
        new EmailAddress('     ')
    }

    expect(createEmail).toThrowError('EmailAddress cannot be empty');
    expect(createEmail).toThrowError(IllegalArgumentException);
})

it('should throw when passing in a invalid email', () => {
    const createEmail = () => {
        new EmailAddress('foo')
    }

    expect(createEmail).toThrowError('EmailAddress should be a valid email address');
    expect(createEmail).toThrowError(IllegalArgumentException);
})

it('should equal an email with the same value.', () => {
    const email1 = new EmailAddress('foo@bar.com')
    const email2 = new EmailAddress('foo@bar.com')

    expect(email1.equals(email2)).toBe(true)
})

it('should not equal an email with a different value.', () => {
    const email1 = new EmailAddress('foo@bar.com')
    const email2 = new EmailAddress('foo@bar2.com')

    expect(email1.equals(email2)).toBe(false)
})
