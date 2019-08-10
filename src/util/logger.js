const { createLogger, format, transports } = require('winston')
const env = process.env.NODE_ENV

const logger = createLogger({
  level:  env === 'prod' ? 'info' : 'debug',
  format: format.combine(format.colorize(), format.simple()),
  transports: [new transports.Console()]
})

export default logger