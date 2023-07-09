//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

/**
 * 
 * @param array 
 * type Array,
 * 
 * @param arrayLength 
 * type Number,
 * 
 * @param segmentSize 
 * type Number,
 * 
 * @returns 
 * Array,
 * 
 */
function additionOfSubSegmentsArray(array, arrayLength = 0, segmentSize = 0){
  let arrayResult = Array();
  for(let index = 0; index < arrayLength; index++){
    if((index + segmentSize - 1) < arrayLength){
      let acctSum = 0;
      for(let indexSegment = 0; indexSegment < segmentSize; indexSegment++){
        acctSum += Number(array[index + indexSegment]);
      }
      arrayResult.push(acctSum);
    }
  }
  return arrayResult;
}

/**
 * 
 * @param array 
 * type Array,
 * 
 * @returns 
 * type Number,
 * 
 */
function getHigherNumberOfAnArray(array){
  const arrayLength = array.length;
  let higHerNumber = 0;
  for(let index = 0; index < arrayLength; index++){
    if(array[index] > higHerNumber) higHerNumber = array[index];
  }
  return higHerNumber;
}

function entryPoint(dataIn){
  const testCases = Number(dataIn.shift());
  for(let index = 0; index < testCases; index++){
    const nAndk = dataIn.shift().split(' ');
    const n = Number(nAndk[0]);
    const k = Number(nAndk[1]);
    const girlsToImpress = dataIn.shift().split(' ');
    const result = getHigherNumberOfAnArray(additionOfSubSegmentsArray(girlsToImpress,n,k));
    console.log(result);
  }
}

module.exports = {
  additionOfSubSegmentsArray,
  getHigherNumberOfAnArray,
}
