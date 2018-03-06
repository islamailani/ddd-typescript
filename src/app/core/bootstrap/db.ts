// import { log } from 'infrastructure/risio'
import { Connection, createConnection } from 'typeorm'
import { logger, container } from 'app/ioc/container'
import { UserRepository } from 'infrastructure/repositories/UserRepository'
import { RoleRepository } from 'infrastructure/repositories/RoleRepository'
import { Role, Roles } from 'domain/access/Role'
import { UserService } from 'domain/access/services/UserService'

let instance: Connection = null

export const db = async (): Promise<Connection> => {
    if (! instance) {
        try {
            instance = await createConnection()
            logger().info(`Connected to the database`)

            const userRepository = instance.getCustomRepository(UserRepository)

            if (await userRepository.count() === 0) {

                logger().info('No users were found, adding admin@example.com admin')
                const roleRepository = instance.getCustomRepository(RoleRepository)

                const adminRole = Role.fromType(Roles.Admin)
                const userRole = Role.fromType(Roles.User)

                await roleRepository.save(adminRole)
                await roleRepository.save(userRole)

                await container.get(UserService)
                    .registerNewAdminUser('setup@lifely.nl', 'test')
            }
        } catch (err) {
            logger().error(`Cannot connect to database. Is the database running? Error: ${err.stack}`)
            process.exit(1)
        }
    }

    return instance
}
