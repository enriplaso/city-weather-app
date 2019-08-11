import { expect } from 'chai'
import Weather from '../models/Weather'
import OpenweatherClient from '../util/OpenweatherClient'
describe('Weather Client test', () => {
    const wheaterRaw = {"coord":{"lon":145.77,"lat":-16.92},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":300.15,"pressure":1007,"humidity":74,"temp_min":300.15,"temp_max":300.15},"visibility":10000,"wind":{"speed":3.6,"deg":160},"clouds":{"all":40},"dt":1485790200,"sys":{"type":1,"id":8166,"message":0.2064,"country":"AU","sunrise":1485720272,"sunset":1485766550},"id":2172797,"name":"Cairns","cod":200}
   
    it('Transfor raw wheater dat to custom wheather data', () => {
        const weatherClient = new OpenweatherClient();

        const transformedData = OpenweatherClient.transForm(wheaterRaw);
        expect(transformedData).to.eql(
            {
                "type": "Clouds",
                "type_description": "scattered clouds",
                "sunrise": "1970-01-18T04:42:00.272Z",
                "sunset": "1970-01-18T04:42:00.272Z",
                "temp": 148.97,
                "temp_min": 148.97,
                "temp_max": 148.97,
                "pressure": 1007,
                "humidity": 74,
                "clouds_percent": 40,
                "wind_speed": 3.6
              }
        )
     })

 });