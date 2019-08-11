import { createLogger, format, transports } from 'winston'
import 'dotenv/config'

const env = process.env.NODE_ENV
console.log(env)
const logger = createLogger({
  level:  env === 'prod' ? 'info' : 'debug',
  format: format.combine(format.colorize(), format.simple()),
  transports: [new transports.Console()]
})

export default logger