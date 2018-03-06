import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm'
import { BaseEntity } from 'domain/access/BaseEnitity'
import { UserSession } from 'domain/access/UserSession'
import { Role, Roles } from 'domain/access/Role'
import { IllegalArgumentException } from '../IllegalArgumentException'
import { IllegalStateException } from '../IllegalStateException'

@Entity()
export class User extends BaseEntity implements User {

    @OneToMany(type => UserSession, session => session.user)
    public sessions: UserSession[] = []

    @ManyToMany(type => Role, role => role.users, { eager: true })
    @JoinTable({ name: 'user_has_role' })
    public roles: Role[] = []

    @Column({ default: null })
    public passwordResetToken: string

    @Column({ unique: true })
    public email: string

    @Column({ nullable: true })
    public password: string

    /**
     * Assigns a new role to a user, the same role cannnot be assigned twice.
     *
     * @param aRole The role to assign
     */
    public assignRole(aRole: Role) {

        if (!Object.values(Roles).includes(aRole.type)) {
            throw new IllegalArgumentException(`Role is not a valid role, "${aRole}" given`)
        }

        if (this.roles.find(role => role.type === aRole.type)) {
            throw new IllegalStateException('Cannot assign the same role twice')
        }

        this.roles.push(aRole)
    }

    public async setPassword(hashedPassword: string) {
        this.password = hashedPassword
    }

    public setEmail(emailAddres: string) {
        this.email = emailAddres
    }

    public setPasswordResetToken(aResetToken: string) {
        this.passwordResetToken = aResetToken
    }

    public isPasswordTokenExpired() {
        const expiresAt = parseInt(this.passwordResetToken.substring(0, this.passwordResetToken.indexOf(':')), 10)

        return expiresAt > new Date().getTime()
    }
}
