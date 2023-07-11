const paireq = require('../main/index.approach1');

describe('codechef PAIREQ', () => {

  //
  let numberOfTests = 0;

  //
  test(`test #${++numberOfTests} :: function getMaximunNumberOfRepetitions :: normal case`, () => {
    
    const arrayIn = ['2','2','1','1'];
    const arrayLength = 4;

    expect(paireq.getMaximunNumberOfRepetitions(arrayIn,arrayLength)).toBe(2);
  })

  //
  test(`test #${++numberOfTests} :: function getMaximunNumberOfRepetitions :: normal case`, () => {
    
    const arrayIn = ['2','4','6','4','6','8','3','56','3','6','7','7'];
    const arrayLength = 12;

    expect(paireq.getMaximunNumberOfRepetitions(arrayIn,arrayLength)).toBe(3);
  })

  //
  test(`test #${++numberOfTests} :: function minimunNumberOfOperations :: normal case`, () => {
    expect(paireq.minimunNumberOfOperations(12,1)).toBe(11);
  })
})