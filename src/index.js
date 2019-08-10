import express from 'express'
import logger from './util/logger'

const app = express()

app.listen(3000, () =>
  logger.info('Weather service listening in port 3000')
);