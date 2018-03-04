
// export class UserService {

//     public async registerNewAdminUser(email: string, plainPassword: string): Promise<User> {
//         const adminUser = new User()

//         const adminRole = await getRoleRepository().findByType(Roles.Admin)

//         await adminUser.setPassword('test')
//         adminUser.setEmail('setup@lifely.nl')

//         adminUser.assignRole(adminRole)

//         return adminUser
//     }
// }

// export const userService = new UserService()
