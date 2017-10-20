import { greet } from './greet'

describe('greet', () => {
    it('should include name of the message', () => {

        //given
        const sampleText = 'synoradzki';

        //when
        const actual = greet(sampleText);
        
        //then
        expect(actual).toContain(sampleText);

    })
});