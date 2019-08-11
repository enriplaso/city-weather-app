import { Router } from 'express'
import CityController from '../controllers/CityController'
import HttpStatus  from 'http-status-codes'
import httpErrors from '../error/httpErrors'
const path = require('path');
const cityFilePath = '../data/city.cleaned.list.json'
const router = Router();
const cityController = new CityController(path.resolve(__dirname,cityFilePath))
cityController.init()

router.get('/', (req, res) => {
  if(req.query.lat && req.query.lng ) {
    return res.status(HttpStatus.OK).send(cityController.getCitiesInRatio(req.query.lat, req.query.lng, 10))
  }else {
    return  res.status(HttpStatus.BAD_REQUEST).send(httpErrors.HTTP_ERROR.BAD_REQUEST_PARAMS)
  }
})

router.get('/:city_id', (req, res) => {
  const city = cityController.getCity(parseInt(req.params.city_id))
  if(city) {
    return res.send(city)
  } else{
    return  res.status(HttpStatus.NOT_FOUND).send(httpErrors.HTTP_ERROR.NOT_FOUND)
  }
})

router.get('/:city_id//weather', (req, res) => {
    return res.send("OK")
})


export default router