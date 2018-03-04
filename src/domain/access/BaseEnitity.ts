import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { injectable } from 'inversify'

@injectable()
export abstract class BaseEntity {

    @PrimaryGeneratedColumn()
    public readonly id: number

    @CreateDateColumn()
    public readonly createdAt: Date

    @UpdateDateColumn()
    public readonly updatedAt: Date
}
