const jasmine = require('jasmine')



describe('Fake Functions', () => {
    test('Should test fakeFunction', () => {
        const fakeFunction = jasmine.createSpy('fakeFunction');
        expect(fakeFunction).toHaveBeenCalled();
    })
})