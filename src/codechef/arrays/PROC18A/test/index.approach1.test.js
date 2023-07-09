const proc18a = require('../main/index.approach1');

describe('cocdechef PROC18A', () => {

  //
  let numberOfTests = 0;

  //
  test(`test #${++numberOfTests} :: function additionOfSubSegmentsArray :: normal case`, () => {
    
    const arrayTest = ['2','4','8','1','2','1','8'];
    const result = [6,12,9,3,3,9];
    const arrayLength = 7;
    const segmentSize = 2;

    expect(proc18a.additionOfSubSegmentsArray(arrayTest,arrayLength,segmentSize)).toEqual(result);
  })

  //
  test(`test #${++numberOfTests} :: function additionOfSubSegmentsArray :: normal case`, () => {
    
    const arrayTest = ['2','4','8','1','2','1','8','8','1','2','1'];
    const result = [15,15,12,12,19,18,19,12];
    const arrayLength = 11;
    const segmentSize = 4;

    expect(proc18a.additionOfSubSegmentsArray(arrayTest,arrayLength,segmentSize)).toEqual(result);
  })

  //
  test(`test #${++numberOfTests} :: function getHigherNumberOfAnArray :: normal case`, () => {
    
    const arrayTest = [15,15,12,12,19,18,19,12];
    const result = 19;

    expect(proc18a.getHigherNumberOfAnArray(arrayTest)).toBe(result);
  })
})