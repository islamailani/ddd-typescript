import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm'
import { BaseEntity } from 'domain/access/BaseEnitity'
import { UserSession } from 'domain/access/UserSession'
import { Role } from 'domain/access/Role'
import { injectable } from 'inversify'
import { AuthService } from 'domain/access/AuthService'

@Entity()
@injectable()
export class User extends BaseEntity implements User {

    @OneToMany(type => UserSession, session => session.user)
    public sessions: UserSession[]

    @ManyToMany(type => Role, role => role.users, { eager: true })
    @JoinTable({ name: 'user_has_role' })
    public roles: Role[]

    @Column({ default: null })
    public passwordResetToken: string

    @Column({ unique: true })
    public email: string

    @Column({ nullable: true })
    public password: string

    public authService: AuthService

    constructor(authService: AuthService) {
        super()
        this.authService = authService
    }

    /**
     * Assigns a new role to a user, the same role cannnot be assigned twice.
     *
     * @param aRole The role to assign
     */
    public assignRole(aRole: Role) {
        if (this.roles.find(role => role.type === aRole.type)) {
            throw new Error('Cannot assign the same role twice')
        }

        this.roles.push(aRole)
    }

    public async setPassword(aPlainTextPassword: string) {
        this.password = await this.authService.hashPassword(aPlainTextPassword)
    }

    public async checkPassword(aPlainTextPassword: string) {
        return await this.authService.verifyPassword(aPlainTextPassword, this.password)
    }

    public isPasswordTokenExpired() {
        return this.authService.isPasswordTokenExpired(this.passwordResetToken)
    }

    public setPasswordResetToken() {
        this.passwordResetToken = this.authService.generatePasswordResetToken()
    }
}
