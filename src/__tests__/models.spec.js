import { expect } from 'chai'
import City from '../models/City.js'
import Coordinates from '../models/Coordinates.js'

describe('City and Coordinates', () => {
    let coordinates = new Coordinates(8.4660395,49.4874592) 
    let city = new City(2873891, 'Mannheim', coordinates)
    
    it('Should have properties name and id', () => {
        expect(city.name).to.eql('Mannheim')
        expect(city.id).to.eql(2873891)
     });

     it('Should have properties latitud and longitude', () => {
        expect(coordinates.longitude).to.eql(8.4660395)
        expect(coordinates.latitude).to.eql(49.4874592)
     });

     it('City Should have properties latitud and longitude', () => {
        expect(city.longitude).to.eql(8.4660395)
        expect(city.latitude).to.eql(49.4874592)
     });

     it('City getter Should retun an object with id and name', () => {
        expect(city.city.name).to.eql('Mannheim')
        expect(city.city.id).to.eql(2873891)
        expect(city.city.longitude).to.eql(undefined)
     });
});