import 'app/core/bootstrap'

import { db } from 'app/core/bootstrap/db'
import { container } from 'app/ioc/container'
import { UserService } from 'domain/access/services/UserService'

(async () => {
    await db()

    const userService = container.get(UserService)

    // const newAdmin = await userService.registerNewAdminUser('example@lifely.nl', 'test')
    // console.log(newAdmin)

    const verifiedUser = await userService.verifyUserWithCredentials('example@lifely.nl', 'test')
    console.log(verifiedUser)

})()
