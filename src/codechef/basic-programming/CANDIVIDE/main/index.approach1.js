//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

/**
 * 
 * @description
 * A predicate function, that returns true or false, if dividend number is a module of 3
 * 
 * @param dividend 
 * type Number, 
 * 
 * @returns 
 * Boolean,
 * 
 */
function moduleOf3(dividend) {
  return (dividend % 3 === 0);
}

/**
 * 
 * @description
 * Application entry point
 * 
 * @param dataIn
 * type Array, with the number of test cases and the data to be evaluated for
 * each one of them
 *  
 */
function entryPoint(dataIn) {
  const tests = dataIn.shift();
  for(let index = 0; index < tests; index++){
    if(moduleOf3(Number(dataIn[index]))) console.log('YES');
    else console.log('NO');
  }
}

module.exports = {
  moduleOf3
}

