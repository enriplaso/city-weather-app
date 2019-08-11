import express from 'express'
import logger from './util/logger'
import routes from './routes';

const app = express()

//app.use("/health", router);


app.use('/cities', routes.cities);

app.listen(3000, () =>
  logger.info('Weather service listening in port 3000')
);