import { ValueObject } from '../ValueObject'
import { IdentifiesEntity } from '../IdentifiesEntity'

export class UserId extends IdentifiesEntity implements ValueObject {

    public equals(other: UserId) {
        return other.id === this.id
    }
}
