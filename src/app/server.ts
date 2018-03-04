import 'app/core/bootstrap'

import { db } from 'app/core/bootstrap/db'

import { container, logger } from 'app/ioc/container'
import { User } from 'domain/access/User'

; (async () => {
    await db()

    const user = container.get(User)

    await user.setPassword('test')

    logger().info(user.password)

})()
