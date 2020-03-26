describe('The question first', () => {
    beforeEach(() => {
        console.log('beforeEach');
    });
    beforeAll(() => {
        console.log('beforeAll');
    });
    it('should display a list of items', () => {
        expect(2 + 2).toEqual(4);
    });
    it.skip('should display a list of items', () => {
        expect(2 + 2).toEqual(5);
    });
    it('should display a list of items', () => {
        expect(2 + 2).toEqual(4);
    });
});
