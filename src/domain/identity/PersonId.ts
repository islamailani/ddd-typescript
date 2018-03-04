import { ValueObject } from '../ValueObject'
import { IdentifiesEntity } from '../IdentifiesEntity'

export class PersonId extends IdentifiesEntity implements ValueObject {

    public equals(other: PersonId) {
        return other.id === this.id
    }
}
