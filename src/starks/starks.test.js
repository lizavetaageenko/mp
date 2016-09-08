import starks, { uppercasefyStarks } from './starks';

describe('Starks', () => {
    it('should containe "Eddard" as first Stark', () => {
        expect(starks[0]).toBe('Eddard');
    });

    it('should containe "Arya" as second Stark', () => {
        expect(starks[1]).toBe('Arya');
    });
});

describe('uppercasefyStarks', () => {
    it('should containe "EDDARD" as first Stark', () => {
        expect(uppercasefyStarks()[0]).toBe('EDDARD');
    });
});
