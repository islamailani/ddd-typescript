import { ValueObject } from '../ValueObject'
import { IdentifiesEntity } from '../IdentifiesEntity'

export class UserId extends IdentifiesEntity implements ValueObject {

    equals(other: UserId) {
        return other.id === this.id
    }
}
