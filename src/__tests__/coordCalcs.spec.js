import { expect } from 'chai'
import {islocationInRatio, getDistanceInKmFromCoordinates} from '../helper/coordCalcs'

describe('Coordinates calculation tests', () => {

     it('Shoud get true if same coordinate is in given radius', () => {
        expect(islocationInRatio(49.49132,8.46050,49.49132,8.46050,10)).to.eql(true)
     })

     it('Shoud get true if a coordinate is  in given radius', () => {
        expect(islocationInRatio(49.49132,8.46050,49.46812,8.41587,10)).to.eql(true)
        expect(islocationInRatio(49.49757,8.46256,49.46991,8.42274,10)).to.eql(true)
        expect(islocationInRatio(49.49132,8.46050,49.32557,8.34240,10)).to.eql(false)
        expect(islocationInRatio(49.49757,8.46256,49.51005,8.54908,10)).to.eql(true)
        expect(islocationInRatio(49.49132,8.42030,49.62788,8.33551,10)).to.eql(false)
        expect(islocationInRatio(49.49132,8.42030,49.52788,8.33553,10)).to.eql(true)
        expect(islocationInRatio(49.49132,8.42030,49.52788,8.33553,10)).to.eql(true)
     })

     it('Shoud get the distance if same coordinate is in given radius', () => {
        expect(getDistanceInKmFromCoordinates(49.49132,8.42030,49.62788,8.33551)).to.eql(16.370061890887623)
        expect(getDistanceInKmFromCoordinates(45.49132,34.42430,49.62788,8.33551)).to.eql(1999.992172598302)
     })

})