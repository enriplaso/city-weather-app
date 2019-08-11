import OpenewatherClient from '../util/OpenweatherClient'
import logger from '../util/logger'
class WeatherController {

    constructor(domain, apiKey) {
        this.domain = domain
        this.apiKey = apiKey
    }

    async getWeatherByCityId(cityId) {
        let rawWeatherData = null
        try{
            rawWeatherData = await OpenewatherClient.getWeatherByCityId(cityId, this.domain, this.apiKey)
        }catch(error) {
            logger.error("Error while getting weather data for city id: " + cityId + " Service ERROR: " + error)       
            return null
        }
        return OpenewatherClient.transform(rawWeatherData)
    }

}

export default WeatherController