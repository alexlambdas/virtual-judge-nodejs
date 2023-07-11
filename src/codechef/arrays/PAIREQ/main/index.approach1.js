//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

function getMaximunNumberOfRepetitions(arrayIn = Array(), arrayLength = 0) {
  
  const map = new Map();
  for(let index = 0; index < arrayLength; index++){
    const key = arrayIn[index];
    if(map.has(key)) map.set(key, map.get(key)+1);
    else map.set(key,1);
  }

  let result = 0;
  for(let repetitions of map.values()){
    if(repetitions > result) result = repetitions;
  }

  return result;
}

function minimunNumberOfOperations(arrayLength = 0, repetitions = 0){
  return arrayLength - repetitions;
}

function entryPoint(dataIn = Array()){
  const testCases = Number(dataIn.shift());
  for(let index = 0; index < testCases; index++){
    const arrayLength = Number(dataIn.shift());
    const arrayIn = dataIn.shift().split(' ');
    const repetitions = getMaximunNumberOfRepetitions(arrayIn,arrayLength);
    const result = minimunNumberOfOperations(arrayLength,repetitions);
    console.log(result);
  }
}

entryPoint(Array('4','3','1 2 3','4','5 5 5 5','4','2 2 1 1','3','1 1 2'));

module.exports = {
  getMaximunNumberOfRepetitions,
  minimunNumberOfOperations,
}