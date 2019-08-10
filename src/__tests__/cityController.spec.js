import { expect } from 'chai'
import City from '../models/City.js'
import Coordinates from '../models/Coordinates.js'
import CityController from '../controllers/CityController'
import sinon from 'sinon';
import consts from '../consts'

describe('City Controller', () => {
    const cityFilePath = 'test'
    const cities = [{"id":707860,"name":"Hurzuf","lon":34.283333,"lat":44.549999},{"id":519188,"name":"Novinki","lon":37.666668,"lat":55.683334},{"id":1283378,"name":"Gorkhā","lon":84.633331,"lat":28},{"id":1270260,"name":"State of Haryāna","lon":76,"lat":29},{"id":708546,"name":"Holubynka","lon":33.900002,"lat":44.599998},{"id":1283710,"name":"Bāgmatī Zone","lon":85.416664,"lat":28},{"id":529334,"name":"Mar’ina Roshcha","lon":37.611111,"lat":55.796391},{"id":1269750,"name":"Republic of India","lon":77,"lat":20},{"id":1283240,"name":"Kathmandu","lon":85.316666,"lat":27.716667},{"id":703363,"name":"Laspi","lon":33.733334,"lat":44.416668},{"id":3632308,"name":"Merida","lon":-71.144997,"lat":8.598333},{"id":473537,"name":"Vinogradovo","lon":38.545555,"lat":55.423332},{"id":384848,"name":"Qarah Gawl al ‘Ulyā","lon":45.6325,"lat":35.353889},{"id":569143,"name":"Cherkizovo","lon":37.728889,"lat":55.800835},{"id":713514,"name":"Alupka","lon":34.049999,"lat":44.416668},{"id":2878044,"name":"Lichtenrade","lon":13.40637,"lat":52.398441},{"id":464176,"name":"Zavety Il’icha","lon":37.849998,"lat":56.049999},{"id":295582,"name":"‘Azriqam","lon":34.700001,"lat":31.75},{"id":1271231,"name":"Ghūra","lon":79.883331,"lat":24.766666}]
    before(()=> {
    })
    it('_loadCities should be called when the ContiController is initialized', () => {
        let cityController = new CityController(cityFilePath);
        cityController._loadCities = sinon.spy(() => {})
        cityController.init()
        expect(cityController._loadCities.called).to.eql(true)
     });

     it('should emit ready when the controller is initialized', (done) => {
        let cityController = new CityController(cityFilePath);
        cityController._loadCities = sinon.spy(() => {cityController.emit(consts.EVENTS.LOADED)})
        cityController.on(consts.EVENTS.READY, () => {
            expect(cityController._loadCities.called).to.eql(true)
            done()
        })
        cityController.init()
     });

     it('Shoud get city Novinki and id 519188 hen getCity(519188) is called', (done) => {
        const cityController = new CityController(cityFilePath);
        const citiesTransfomed = []
        cities.forEach( city => {
            citiesTransfomed.push(new City(city.id, city.name, new Coordinates(city.longitud, city.latitude)))
        })
        cityController._cities = citiesTransfomed;
        cityController._loadCities = sinon.spy(() => {cityController.emit(consts.EVENTS.LOADED)})
        cityController.on(consts.EVENTS.READY, () => {
            expect( cityController.getCity(519188)).to.eql({"id":519188,"name":"Novinki"})
            done()
        })
        cityController.init()
     });
     
});