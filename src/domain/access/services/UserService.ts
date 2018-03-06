import { injectable } from 'inversify'
import { User } from 'domain/access/User'
import { AuthService } from './AuthService'
import { db } from 'app/core/bootstrap/db'
import { RoleRepository } from 'infrastructure/repositories/RoleRepository'
import { Roles } from 'domain/access/Role'
import { UserRepository } from 'infrastructure/repositories/UserRepository'
import { IllegalStateException } from '../../IllegalStateException'

@injectable()
export class UserService {

    constructor(
       private authService: AuthService
    ) {}

    /**
     * Registers a new admin with the system.
     */
    public async registerNewAdminUser(email: string, plainPassword: string): Promise<User> {

        return await (await db()).transaction(async manager => {
            const adminRepository = manager.getCustomRepository(RoleRepository)
            const userRepository = manager.getCustomRepository(UserRepository)

            const adminRole = await adminRepository.findByType(Roles.Admin)

            const adminUser = new User()

            const hashedPassword = await this.authService.hashPassword(plainPassword)

            const userExists = !!await userRepository.findOne({ email })

            if (userExists) {
                throw new IllegalStateException('User already exists')
            }

            adminUser.setEmail(email)
            await adminUser.setPassword(hashedPassword)

            adminUser.assignRole(adminRole)

            return userRepository.save(adminUser)
        })
    }

    /**
     * Try to get a user by their credentials, if valid return the user.
     */
    public async verifyUserWithCredentials(email: string, plainPassword: string) {
        return await (await db()).transaction(async manager => {
            const userRepository = manager.getCustomRepository(UserRepository)
            const user = await userRepository.findOne({ email })

            if (!user) {
                throw new IllegalStateException(`Cannot find user with email ${email}`)
            }

            if (!await this.authService.verifyPassword(plainPassword, user.password)) {
                throw new IllegalStateException(`Failed to verfiy credentials`)
            }

            return user
        })
    }
}
