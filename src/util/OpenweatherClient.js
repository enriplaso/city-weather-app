import Weather from '../models/Weather'
import logger from './logger'
import request from "request";
class OpenweatherClient {
  
    static getWeatherByCityId(cityId, domain, apiKey) {
        const url = 'http://'+ domain + '/data/2.5/weather?id=' + cityId +'&appid='+ apiKey
        return new Promise(function (resolve, reject) {
            request(url, function (error, res, body) {
              if (!error && res.statusCode == 200) {
                resolve(body);
              } else {
                reject(error);
              }
            });
        });
    }

    static transform(wheatherRawObject) {
        let weather = null
        try{
            wheatherRawObject = JSON.parse(wheatherRawObject)
        } catch(error){
            logger.error(error)
        }
        if(wheatherRawObject && wheatherRawObject.weather && wheatherRawObject.weather[0]) {
            weather = new Weather(wheatherRawObject.weather[0].main, wheatherRawObject.weather[0].description)
            if(wheatherRawObject.main){
                weather.temp = parseFloat(this.convert2Celsius(wheatherRawObject.main.temp).toFixed(2))
                weather.temp_max = parseFloat(this.convert2Celsius(wheatherRawObject.main.temp_max).toFixed(2))
                weather.temp_min = parseFloat(this.convert2Celsius(wheatherRawObject.main.temp_min).toFixed(2))
                weather.pressure = wheatherRawObject.main.pressure
                weather.humidity = wheatherRawObject.main.humidity
            }
            if(wheatherRawObject.clouds){
                weather.clouds_percent = wheatherRawObject.clouds.all
            }
            if(wheatherRawObject.sys){
                weather.sunrise = new Date(wheatherRawObject.sys.sunrise).toISOString()	
                weather.sunset = new Date(wheatherRawObject.sys.sunrise).toISOString()	
            }
            if(wheatherRawObject.wind){
                weather.wind_speed = wheatherRawObject.wind.speed
            }
        }
        return weather
    }

    static convert2Celsius(Fahrenheit_temp) {return (5/9) * (Fahrenheit_temp - 32) }
}

export default OpenweatherClient