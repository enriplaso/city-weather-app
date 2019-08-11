class Weather {
    constructor(type, type_description) {
        this.type = type
        this.type_description = type_description
        this.sunrise = null
        this.sunset = null
        this.temp = null
        this.temp_min = null
        this.temp_max = null
        this.pressure = null
        this.humidity = null
        this.clouds_percent = null
        this.wind_speed = null
    }

}

export default Weather