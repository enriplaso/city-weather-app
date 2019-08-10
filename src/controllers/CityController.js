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
        this._loadCities();
    }

    _loadCities(jsonFilePath) {
        fs.readFile(jsonFilePath, (err, data) => {
            if (err) throw err
            if(data && data.length) {
                data.forEach( city => {
                    this.cities.push(new City(city.id, city.name, new Coordinates(city.longitud, city.latitude)))
                })
            } else {
                logger.Error("Data is not an array or is empty")
                throw new Error("Data is not an array or is empty");
            }
            this.emit(consts.Event.LOADED)

        });
        
    }

}

export default CityController