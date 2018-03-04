// import { log } from 'infrastructure/risio'
import { Connection, createConnection } from 'typeorm'
import { logger } from 'app/ioc/container'

let instance: Connection = null

export const db = async (): Promise<Connection> => {
    if (! instance) {
        try {
            instance = await createConnection()
            logger().info(`Connected to the database`)

            // if (await getUserRepository().count() === 0) {
            //     // log().info('No users were found, adding admin@example.com admin')

            //     const adminRole = Role.fromType(Roles.Admin)
            //     const userRole = Role.fromType(Roles.User)

            //     await getRoleRepository().save(adminRole)
            //     await getRoleRepository().save(userRole)

            //     const adminUser = await userService.registerNewAdminUser('setup@lifely.nl', 'test')

            //     await getUserRepository().save(adminUser)
            // }
        } catch (err) {
            logger().error(`Cannot connect to database. Is the database running? Error: ${err.message}`)
            process.exit(1)
        }
    }

    return instance
}
