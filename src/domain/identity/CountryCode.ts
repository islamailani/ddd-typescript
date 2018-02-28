import { isValid, getAlpha2Codes, getName } from 'i18n-iso-countries'
import { ValueObject } from '../ValueObject'
import { IllegalArgumentException } from '../IllegalArgumentException'

export class CountryCode implements ValueObject {

    private alpha2: string

    constructor(alpha2: string) {

        if (!isValid(alpha2) || !(alpha2.toUpperCase() in getAlpha2Codes())) {
            throw new IllegalArgumentException(`"${alpha2}" is not a valid Alpha2 country`)
        }

        this.alpha2 = alpha2
    }

    getAlpha2() {
        return this.alpha2
    }

    getCountryName() {
        return getName(this.alpha2, 'en')
    }

    equals(other: CountryCode) {
        return this.alpha2 === other.alpha2
    }
}
