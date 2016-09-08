import starks, { uppercasefyStarks } from './starks';

describe('Starks', () => {
    it('should containe "Eddard" as first Stark', () => {
        expect(starks[0]).toBe('Eddard');
    });

    it('should containe "Arya" as second Stark', () => {
        expect(starks[1]).toBe('Arya');
    });

    it('should containe "Sansa"', () => {
        expect(starks).toContain('Sansa');
    });
});

describe('uppercasefyStarks', () => {
    it('should containe 5 Upper Starks', () => {
        expect(uppercasefyStarks().length).toBe(5);
    });

    it('should containe "EDDARD" as first Upper Stark', () => {
        expect(uppercasefyStarks()[0]).toBe('EDDARD');
    });
});
