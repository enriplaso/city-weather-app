import logger from '../util/logger'
import consts from '../consts'
import City from '../models/City'
import Coordinates from '../models/Coordinates'
import {islocationInRatio} from '../helper/coordCalcs'

const Events = require('events');
const fs = require('fs');

let instance = null;

class CityController extends Events {
    
    constructor(citiesPath) {
        if(instance) return instance

        super()
        this._citiesPath = citiesPath
        this._cities = []
        this.on(consts.EVENTS.LOADED, () => {
            logger.info("Cities loaded succesfully")
            this.emit(consts.EVENTS.READY)
        })
                
        instance = this;
    }

    init() {
        logger.info("Inizializing Cities...")
        this._loadCities(this._citiesPath)
    }

    _loadCities(jsonFilePath) {
        fs.readFile(jsonFilePath, (err, data) => {
            if (err) throw err
            if(data && data.length) {
                data = JSON.parse(data)
                data.forEach( city => {
                    this._cities.push(new City(city.id, city.name, new Coordinates(city.lon, city.lat)))
                })
            } else {
                throw new Error("Cities Data is not an array or is empty");
            }
            this.emit(consts.EVENTS.LOADED)
        });        
    }

    getCity(id) {return this._cities.filter(city => city.id === id)[0]}

    getCitiesInRatio(latitude, longitud, ratioKm) {
        //return this._cities.filter(city => islocationInRatio(latitude, longitud, city.latitude, city.longitude, ratioKm)) 
        const citiesInRatio = []
        this._cities.forEach(city => {
            if(islocationInRatio(latitude, longitud, city.latitude, city.longitude, ratioKm)){
                citiesInRatio.push(city.city) //we don't send latitude and longitude
            }
        })
        return citiesInRatio
    }

}

export default CityController