import { Router } from 'express'
import CityController from '../controllers/CityController'
import HttpStatus  from 'http-status-codes'
import httpErrors from '../error/httpErrors'
import WeatherController from '../controllers/WeatherController'
import 'dotenv/config'

const path = require('path')
const cityFilePath = '../data/city.cleaned.list.json'
const router = Router();
const weatherController = new WeatherController(process.env.OPEN_WEATHER_DOMAIN, process.env.API_KEY)
CityController.init(path.resolve(__dirname,cityFilePath))

router.get('/', (req, res) => {
  if(req.query.lat && req.query.lng ) {
    return res.status(HttpStatus.OK).send(CityController.getCitiesInRatio(req.query.lat, req.query.lng, 10))
  }else {
    return  res.status(HttpStatus.BAD_REQUEST).send(httpErrors.HTTP_ERROR.BAD_REQUEST_PARAMS)
  }
})

router.get('/:city_id', (req, res) => {
  const city = CityController.getCity(parseInt(req.params.city_id))
  if(city) {
    return res.send(city)
  } else{
    return  res.status(HttpStatus.NOT_FOUND).send(httpErrors.HTTP_ERROR.NOT_FOUND)
  }
})

router.get('/:city_id/weather', async (req, res) => {
  const data = await weatherController.getWeatherByCityId(req.params.city_id)
  if(data) {
    return res.send(data)
  } else {
    return  res.status(HttpStatus.NOT_FOUND).send(httpErrors.HTTP_ERROR.NOT_FOUND)
  }
})

export default router