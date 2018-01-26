export interface ValueObject {

  /**
   * Checks the equality of two value objects.
   */
  equals(other: ValueObject): boolean
}
