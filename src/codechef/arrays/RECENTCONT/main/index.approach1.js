//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

/**
 * 
 * @param problems 
 * type Array,
 * 
 * @return 
 * type Array,
 * 
 */
function problemsFeatured(problems = Array(), arrayLength = 0){
  let start38Problem = 0;
  let lTime108Problem = 0;
  for(let index = 0; index < arrayLength; index++){
    if(problems[index] === 'START38') start38Problem += 1;
    else lTime108Problem += 1;
  }
  return [start38Problem,lTime108Problem];
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
function entryPoint(dataIn){
  const testCases = Number(dataIn.shift());
  for(let index = 0; index < testCases; index++){
    const arrayLength = Number(dataIn.shift());
    const problems = dataIn.shift().split(' ');
    const result = problemsFeatured(problems,arrayLength);
    console.log(result[0] + " " + result[1]);
  }
}

module.exports = { problemsFeatured }