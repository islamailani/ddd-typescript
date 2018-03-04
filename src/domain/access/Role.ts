import { Column, Entity, ManyToMany } from 'typeorm'
import { BaseEntity } from 'domain/access/BaseEnitity'
import { User } from 'domain/access/User'

export enum Roles {
  Admin = 'admin',
  User = 'user'
}

@Entity()
export class Role extends BaseEntity {

    @ManyToMany(type => User, user => user.roles)
    public users: User[]

    @Column({ type: 'varchar', unique: true })
    public type: Roles

    public static fromType(roleType: Roles) {
        const role = new this()
        role.type = roleType

        return role
    }
}
