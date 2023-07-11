const num239 = require('../main/index.approach1');

describe('codechef NUM239', () => {

  //
  let numberOfTests = 0;

  //
  test(`test #${++numberOfTests} :: function getLastDigitOfANumber :: normal case`, () => {
    expect(num239.getLastDigitOfANumber(239)).toBe(9);
  })

  //
  test(`test #${++numberOfTests} :: function getLastDigitOfANumber :: normal case`, () => {
    expect(num239.getLastDigitOfANumber(105)).toBe(5);
  })

  //
  test(`test #${++numberOfTests} :: function itsLastDigitIs239 :: normal case`, () => {
    expect(num239.itsLastDigitIs239(2)).toBe(true);
  })

  //
  test(`test #${++numberOfTests} :: function itsLastDigitIs239 :: normal case`, () => {
    expect(num239.itsLastDigitIs239(3)).toBe(true);
  })

  //
  test(`test #${++numberOfTests} :: function itsLastDigitIs239 :: normal case`, () => {
    expect(num239.itsLastDigitIs239(9)).toBe(true);
  })

  //
  test(`test #${++numberOfTests} :: function itsLastDigitIs239 :: normal case`, () => {
    expect(num239.itsLastDigitIs239(5)).toBe(false);
  })

  //
  test(`test #${++numberOfTests} :: function watchTheNumbersBetweenLandR :: normal case`, () => {
    expect(num239.watchTheNumbersBetweenLandR(1,10)(num239.getLastDigitOfANumber)(num239.itsLastDigitIs239)).toBe(3);
  })

  //
  test(`test #${++numberOfTests} :: function watchTheNumbersBetweenLandR :: normal case`, () => {
    expect(num239.watchTheNumbersBetweenLandR(11,33)(num239.getLastDigitOfANumber)(num239.itsLastDigitIs239)).toBe(8);
  })
})