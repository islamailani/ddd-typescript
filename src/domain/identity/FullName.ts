import { ValueObject } from '../ValueObject'

export class FullName implements ValueObject {

    private parts: string[]

    constructor(...parts: string[]) {
        this.parts = parts
    }

    public getFullName() {
        return this.parts.join(' ')
    }

    public equals(other: FullName) {
        return other.getFullName().toLowerCase() ===
            this.getFullName().toLowerCase()
    }
}
