import 'reflect-metadata'
import * as dotenv from 'dotenv'

dotenv.config()

// This is to make sure it is clear where the application started
process.stdout.write('\n\n\n\n\n')

import './bootstrap/errorHandlers'
import './bootstrap/db'
