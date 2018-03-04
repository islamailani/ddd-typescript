import 'app/core/bootstrap'

import { db } from 'app/core/bootstrap/db'

; (async () => {
    await db()
})()
