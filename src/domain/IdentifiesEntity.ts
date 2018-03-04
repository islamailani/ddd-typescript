import * as uuid from 'uuid/v4'

export abstract class IdentifiesEntity {

    protected id: string

    public constructor() {
        this.id = IdentifiesEntity.generate()
    }

    public static generate() {
        return uuid()
    }

    public getId() {
        return this.id
    }
}
