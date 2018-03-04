// import { ContactInformation } from './ContactInformation'
// import { Address } from 'cluster'
import { PersonId } from './PersonId'
import { Entity } from '../AbstractEntity'

export class Person extends Entity {
    protected id: PersonId
    // private address: Address
    // private contactInformation: ContactInformation
}
