import starks, { uppercasefyStarks } from './starks';

describe('Starks', () => {
    it('should contain "Eddard" as first Stark', () => {
        expect(starks[0]).toBe('Eddard');
    });

    it('should contain "Arya" as second Stark', () => {
        expect(starks[1]).toBe('Arya');
    });

    it('should contain "Sansa"', () => {
        expect(starks).toContain('Sansa');
    });
});

describe('uppercasefyStarks', () => {
    it('should contain 5 Upper Starks', () => {
        expect(uppercasefyStarks().length).toBe(5);
    });

    it('should contain "EDDARD" as first Upper Stark', () => {
        expect(uppercasefyStarks()[0]).toBe('EDDARD');
    });
});
