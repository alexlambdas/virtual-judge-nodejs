const matches = require('../main/index.approach1');

describe('codechef MATCHES', () => {

    //
    let numberOfTests = 0;

    //
    test(`test #${++numberOfTests} :: function howManyMatchesByNumber :: normal case`, () => {
        expect(matches.howManyMatchesByNumber(5)).toBe(5);
    })

    //
    test(`test #${++numberOfTests} :: function howManyMatchesByNumber :: normal case`, () => {
        expect(matches.howManyMatchesByNumber(7)).toBe(3);
    })

    //
    test(`test #${++numberOfTests} :: function numberOfMatchesNeeded :: normal case`, () => {
        expect(matches.numberOfMatchesNeeded(10,10)).toBe(11);
    })

    //
    test(`test #${++numberOfTests} :: function numberOfMatchesNeeded :: normal case`, () => {
        expect(matches.numberOfMatchesNeeded(123,234)).toBe(13);
    })
})