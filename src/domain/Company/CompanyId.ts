import { ValueObject } from '../ValueObject'
import { IdentifiesAggregate } from '../IdentifiesAggregate'

export class CompanyId implements ValueObject, IdentifiesAggregate {


}

const id = CompanyId.generate()
const id2 = CompanyId.generate()

id.equals(id2)
