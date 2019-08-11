import OpenewatherClient from "../util/OpenweatherClient";

class WeatherController {

    constructor(domain, apiKey) {
        this.domain = domain
        this.apiKey = apiKey
    }

    async getWeatherByCityId(cityId) {
        const rawWeatherData = await OpenewatherClient.getWeatherByCityId(cityId, this.domain, this.apiKey)
        return OpenewatherClient.transform(rawWeatherData)
    }

}


export default WeatherController