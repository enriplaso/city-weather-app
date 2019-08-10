import { expect } from 'chai'
import islocationInRatio from '../helper/coordCalcs'

describe('Coordinates calculation tests', () => {
         

     it('Shoud get true if same coordinate is or not in given ratio', () => {
        expect(islocationInRatio(49.49132,8.46050, 49.49132,8.46050)).to.eql(true);


     });

     it('Shoud get if a coordinate is or not in given ratio', () => {
        expect(islocationInRatio(49.49132,8.46050, 49.46812,8.41587)).to.eql(true);
     });

});