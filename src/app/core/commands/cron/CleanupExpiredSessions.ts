// import { log } from 'infrastructure/risio'

// import { Command } from 'infrastructure/risio/console/Command'
// import { getUserSessionRepository } from 'infrastructure/repositories/UserSessionRepository'

// export class CleanupExpiredSessions extends Command {

//     public name = 'cleanup:sessions'
//     public usage = 'cleanup:sessions'
//     public description = 'Removes expired sessions from the database'

//     public async run() {
//         const sessions = await getUserSessionRepository().findExpired()

//         sessions.forEach(session => {
//             log().info(session.id.toString())
//         })
//     }

// }
