
import {compute} from './compute';

describe('compute', () => {
    it('should return 0 if input is negative', () => {
        //given
        const negativeValue = -10;
        //when
        const actual = compute(negativeValue);
        
        expect(actual).toBe(0);

    });
    it('should increment for positive value', () => {
        //given
        const positiveValue = 10;
        //when
        const actual = compute(positiveValue);
        
        expect(actual).toBe(11);

    });
});