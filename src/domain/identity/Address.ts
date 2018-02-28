import { ValueObject } from '../ValueObject'
import { CountryCode } from './CountryCode';

export class Address implements ValueObject {

    private country: CountryCode // Country (always required, 2 character ISO code)

    private nameLine: string // Full name (default name entry)

    private organisationName: string // Company

    private administrativeArea: string // State / Province / Region

    private locality: string // City / Town

    private postalCode: string // Postal code / ZIP Code

    private thoroughfare: string // Street address

    private premise: string | undefined // Apartment, Suite, Box number, etc.

    constructor(
        country: CountryCode,
        nameLine: string,
        organisationName: string,
        administrativeArea: string,
        locality: string,
        postalCode: string,
        thoroughfare: string,
        premise?: string
    ) {
        this.country = country
        this.nameLine = nameLine
        this.organisationName = organisationName
        this.administrativeArea = administrativeArea
        this.locality = locality
        this.postalCode = postalCode
        this.thoroughfare = thoroughfare
        this.premise = premise
    }

    public getAddressParts() {
        return {
            country: this.country.getCountryName(),
            nameLine: this.nameLine,
            organisationName: this.organisationName,
            administrativeArea: this.administrativeArea,
            locality: this.locality,
            postalCode: this.postalCode,
            thoroughfare: this.thoroughfare,
            premise: this.premise,
        }
    }

    equals(other: Address) {
        return (
            this.country.equals(other.country) &&
            this.nameLine === other.nameLine &&
            this.organisationName === other.organisationName &&
            this.administrativeArea === other.administrativeArea &&
            this.locality === other.locality &&
            this.postalCode === other.postalCode &&
            this.thoroughfare === other.thoroughfare &&
            this.premise === other.premise
        )
    }
}
