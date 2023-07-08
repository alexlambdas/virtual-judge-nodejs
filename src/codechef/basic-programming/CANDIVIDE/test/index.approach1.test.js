const candivide = require('../main/index.approach1');

describe('CANDIVIDE', () => {
  
  let numberOfTest = 0;
  
  //
  test(`test #${numberOfTest} :: function moduleOf3 :: normal case`, () => {
    expect(candivide.moduleOf3(4));
  })

  //
  test(`test #${numberOfTest} :: function moduleOf3 :: normal case`, () => {
    expect(candivide.moduleOf3(2));
  })

  //
  test(`test #${numberOfTest} :: function moduleOf3 :: normal case`, () => {
    expect(candivide.moduleOf3(6));
  })
})