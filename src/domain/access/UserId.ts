import { ValueObject } from '../ValueObject'
import { Identifier } from '../Identifier'

export class UserId extends Identifier implements ValueObject {

    constructor() {
        super()
        this.id = UserId.generate()
    }

    equals(other: UserId) {
        return other.id === this.id
    }
}
