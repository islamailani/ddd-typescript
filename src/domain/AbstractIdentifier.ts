import { randomBytes } from 'crypto'

export abstract class AbstractIdentifier {
  constructor(
    private id: string
  ) {}

  public static generate() {
    return new this(randomBytes(20).toString('hex'))
  }

  public toString() {
    return this.id;
  }

  public equals(other: CompanyId) {
    return this.toString() === other.toString()
  }
}
