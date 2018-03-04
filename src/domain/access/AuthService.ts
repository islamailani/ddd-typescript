import { compare, hash } from 'bcrypt'
import * as uuid from 'uuid/v4'
import { injectable } from 'inversify'

@injectable()
export class AuthService {

    /**
     * Generates a password reset token.
     * Appends the current time to the password reset token for expire date.
     */
    public generatePasswordResetToken(): string {
        return `${new Date().getTime() + 3600}:${(uuid() as string).replace('-', '')}`
    }

    /**
     * Checks if the password reset token has expired.
     */
    public isPasswordTokenExpired(passwordResetToken: string) {
        const expiresAt = parseInt(passwordResetToken.substring(0, passwordResetToken.indexOf(':')), 10)

        return expiresAt > new Date().getTime()
    }

    /**
     * Checks if a given password matches the user's password.
     *
     * @param password the unhashed password to check.
     */
    public verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return compare(plainPassword, hashedPassword)
    }

    /**
     * Hashes a user password.
     *
     * @param password The unhashed password
     */
    public hashPassword(password: string): Promise<string> {
        return hash(password, 10)
    }
}
