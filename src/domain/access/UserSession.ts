import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

import { BaseEntity } from 'domain/access/BaseEnitity'
import { User } from 'domain/access/User'

@Entity()
export class UserSession extends BaseEntity {

    @Column()
    public token: string

    @Column({ type: 'timestamp' })
    public expiresAt: Date

    @Column({ nullable: true })
    public ip: string

    @Column({ nullable: true })
    public userAgent: string

    @ManyToOne(type => User, user => user.sessions, { eager: true })
    @JoinColumn()
    public user: User

}
