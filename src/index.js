import express from 'express'
import logger from './util/logger'
import routes from './routes'
import {Router} from 'express'
import 'dotenv/config';

const router = Router();
const app = express()
router.get("/", (req, res) => res.json({status: 'UP'}))

app.use("/health", router)
app.use('/cities', routes.cities)

app.listen(process.env.PORT, () =>
  logger.info('Weather service listening in port: ' + process.env.PORT)
);
