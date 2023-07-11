const recencont = require('../main/index.approach1');

describe('codechef RECENCONT', () => {

  //
  let numberOfTests = 0;

  //
  test(`test #${++numberOfTests} :: function problemsFeatured :: noraml case`, () =>{

    const dataIn = ['LTIME108','LTIME108','LTIME108','START38'];
    const arrayLength = 4;
    const result = [1,3];

    expect(recencont.problemsFeatured(dataIn,arrayLength)).toEqual(result);
  })
})