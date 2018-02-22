import * as uuid from 'uuid/v4'

export abstract class Identifier {

    protected id: string

    public static generate() {
        return uuid()
    }

    getId() {
        return this.id
    }
}
