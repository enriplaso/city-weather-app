import logger from '../util/logger'
import consts from '../consts'
import City from '../models/City'
import Coordinates from '../models/Coordinates'
const Events = require('events');
const fs = require('fs');

class CityController extends Events {
    constructor(citiesPath) {
        super()
        this._citiesPath = citiesPath
        this._cities = []
        this.on(consts.EVENTS.LOADED, () => {
            logger.info("Cities loaded succesfully")
            this.emit(consts.EVENTS.READY)
        })
    }

    init() {
        logger.info("Inizializing Cities...")
        this._loadCities(this._citiesPath);
    }

    _loadCities(jsonFilePath) {
        fs.readFile(jsonFilePath, (err, data) => {
            if (err) throw err
            if(data && data.length) {
                console.log(typeof data)
                data = JSON.parse(data)
                data.forEach( city => {
                    this._cities.push(new City(city.id, city.name, new Coordinates(city.lon, city.lat)))
                })
            } else {
                throw new Error("Data is not an array or is empty");
            }
            this.emit(consts.EVENTS.LOADED)
        });        
    }

    getCity(id) {return this._cities.filter(city => city.id === id)[0]}

    getCitiesInRatio(latitude, longitud, ratioKm) {
        if(this._cities && this._cities.length > 0){

        }
    }

}

export default CityController