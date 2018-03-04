import { ValueObject } from '../ValueObject'
import { EmailAddress } from './EmailAddress'

export class ContactInformation implements ValueObject{

    private email: EmailAddress

    private phoneNumber: string

    constructor(
        email: EmailAddress,
        phoneNumber: string
    ) {
        this.email = email
        this.phoneNumber = phoneNumber
    }

    public equals(other: ContactInformation) {
        return (
            this.email.equals(other.email) &&
            this.phoneNumber === other.phoneNumber
        )
    }
}
