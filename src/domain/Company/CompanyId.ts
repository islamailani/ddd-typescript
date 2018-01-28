// import { ValueObject } from '../ValueObject'
// import { IdentifiesAggregate } from '../IdentifiesAggregate'
import { AbstractIdentifier } from '../AbstractIdentifier';
import { randomBytes } from 'crypto';

export const generateCompanyId = () => {
  return new CompanyId(randomBytes(20).toString('hex'))
}

export class CompanyId extends AbstractIdentifier{


}

const id = generateCompanyId()
const id2 = generateCompanyId()

id.equals(id2)
