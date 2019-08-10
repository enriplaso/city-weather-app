import { expect } from 'chai';
import City from '../models/City.js'

describe('City and Coordinates', () => {
    let city = new City(2873891, 'Mannheim');
    
    it('Should have propertys name and id', () => {
        expect(city.name).to.eql('Mannheim');
        expect(city.id).to.eql(2873891);
     });

});