import { ValueObject } from '../ValueObject'
import { IllegalArgumentException } from '../IllegalArgumentException'

export class EmailAddress implements ValueObject {

    private email: string

    constructor(possibleEmail: string) {
        const trimmedEmail = possibleEmail.trim()

        if (!trimmedEmail.trim()) {
            throw new IllegalArgumentException('EmailAddress cannot be empty')
        }

        const isEmail = new RegExp(
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:ter-max-len
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(trimmedEmail)

        if (!isEmail) {
            // tslint:disable-next-line:max-line-length
            throw new IllegalArgumentException('EmailAddress should be a valid email address')
        }

        this.email = trimmedEmail
    }

    public equals(other: EmailAddress) {
        return other.email === this.email
    }
}
