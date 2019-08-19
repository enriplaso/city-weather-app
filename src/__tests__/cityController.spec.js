import { expect } from 'chai'
import City from '../models/City.js'
import Coordinates from '../models/Coordinates.js'
import CityController from '../controllers/CityController'
import sinon from 'sinon';
import consts from '../consts'
const path = require("path");

describe('City Controller', () => {
    const cityFilePath = '../data/city.cleaned.list.json'

    before(function (done) {
        this.timeout(5000)
        CityController.init(path.resolve(__dirname,cityFilePath))
        CityController.on(consts.EVENTS.READY, () => {
            done()
        })
    })

    it('should load cities from file after init is called', () => {
        expect(CityController._cities.length).to.eql(209579)
        expect(CityController._cities[2].longitude).to.be.not.an('undefined');
        expect(CityController._cities[2].latitude).to.be.not.an('undefined');
        expect(CityController.getCity(519188)).to.eql({"id":519188,"name":"Novinki","latitude": 55.683334,"longitude": 37.666668})
    })

    it('Shoud get city Novinki and id 519188 when getCity(519188) is called', () => {
        expect(CityController.getCity(519188)).to.eql({"id":519188,"name":"Novinki","longitude":37.666668,"latitude":55.683334})
    })

    it('Given the latitude and Longitude Should get list of cities in a 1 Km radius', () => {
        expect(CityController.getCitiesInRatio(49.49132, 8.46050, 1)).to.eql([{"id":2873891,"name":"Mannheim"}])
        expect(CityController.getCitiesInRatio(55.49132, 16.46050, 1)).to.eql([])
    })

    it('Given the latitude and Longitude Should get list of cities in a 10 Km radius', () => {
        expect(CityController.getCitiesInRatio(49.49132, 8.46050, 10)).to.eql([{"id":2864869,"name":"Neuhofen"},{"id":2867310,"name":"Mutterstadt"},{"id":2933349,"name":"Edigheim"},{"id":6555251,"name":"Neuhofen"},{"id":6555250,"name":"Mutterstadt"},{"id":6555665,"name":"Ilvesheim"},{"id":2896468,"name":"Ilvesheim"},{"id":2925550,"name":"Frankenthal"},{"id":3220722,"name":"Stadtkreis Mannheim"},{"id":2834072,"name":"Seckenheim"},{"id":2875376,"name":"Ludwigshafen am Rhein"},{"id":2873891,"name":"Mannheim"},{"id":6555232,"name":"Altrip"},{"id":2956891,"name":"Altrip"},{"id":2924380,"name":"Friesenheim"},{"id":6555248,"name":"Limburgerhof"},{"id":2877647,"name":"Limburgerhof"},{"id":2843521,"name":"Ruchheim"},{"id":2872828,"name":"Maudach"},{"id":2864388,"name":"Neuostheim"}])
    })

});