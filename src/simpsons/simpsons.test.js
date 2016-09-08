import simpsons from './simpsons';

describe('Simpsons', () => {
    it('should contain 5 Simpsons', () => {
        expect(simpsons.length).toBe(5);
    });

    it('should contain "Homer" as first Simpson', () => {
        expect(simpsons[0]).toBe('Homer');
    });

    it('should contain "Bart" as second Simpson', () => {
        expect(simpsons[1]).toBe('Bart');
    });
});