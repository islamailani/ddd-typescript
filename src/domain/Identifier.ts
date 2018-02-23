import * as uuid from 'uuid/v4'

export abstract class Identifier {

    protected id: string

    public constructor() {
        this.id = Identifier.generate()
    }

    public static generate() {
        return uuid()
    }

    getId() {
        return this.id
    }
}
