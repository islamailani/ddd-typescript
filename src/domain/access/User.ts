import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm'
import { BaseEntity } from 'domain/access/BaseEnitity'
import { UserSession } from 'domain/access/UserSession'
import { Role } from 'domain/access/Role'

@Entity()
export class User extends BaseEntity {

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

}
