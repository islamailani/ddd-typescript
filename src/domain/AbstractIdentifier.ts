
export interface IdentifiesAggregate {
  toString(): string
}

export abstract class AbstractIdentifier implements IdentifiesAggregate {
  constructor(
    private id: string
  ) {}

  public toString() {
    return this.id;
  }

  public equals(other: this) {
    return this.toString() === other.toString()
  }
}
