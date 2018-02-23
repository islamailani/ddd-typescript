
export class Address implements ValueObject {
    // country => Country (always required, 2 character ISO code)
    // name_line => Full name (default name entry)
    // organisation_name => Company
    // administrative_area => State / Province / Region (ISO code when available)
    // sub_administrative_area => County / District (unused)
    // locality => City / Town
    // dependent_locality => Dependent locality (unused)
    // postal_code => Postal code / ZIP Code
    // thoroughfare => Street address
    // premise => Apartment, Suite, Box number, etc.
    // sub_premise => Sub premise (unused)
}
