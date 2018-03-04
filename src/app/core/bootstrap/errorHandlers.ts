import { logger } from 'app/ioc/container'

// Catch uncaughtException
process.on('uncaughtException', (uncaughtException: Error) => {

    // Log the errors
    logger().error(`You have an uncaught exception in your code:\n${uncaughtException.stack}`)

    process.exit(1)
})

// Catch uncaught promise rejections
process.on('unhandledRejection', (unhandledRejection: Error) => {

    // Log the errors
    logger().error(`You have an unhandled rejection in your code:\n${unhandledRejection.stack}`)

    process.exit(1)
})

// When the process ends.
process.on('SIGINT', async () => {
    try {
        logger().info('Exiting process with code 0...')
        process.exit(0)
    } catch (err) {
        logger().error(`You have an error in the SIGINT handler:\n${err.stack}`)
        process.exit(1)
    }
})
