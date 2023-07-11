//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

function howManyMatchesByNumber(number = 0) {
  switch(number){
    case 0: return 6;
    case 1: return 2;
    case 2: return 5;
    case 3: return 5;
    case 4: return 4;
    case 5: return 5;
    case 6: return 6;
    case 7: return 3;
    case 8: return 7;
    case 9: return 6;
    default: return 0;
  }
}

function numberOfMatchesNeeded(a = 0, b = 0){
  let resultOfSum = a + b;
  let arrayResult = resultOfSum.toString().split('');
  let arrayLength = arrayResult.length;
  let result = 0;
  for(let index = 0; index < arrayLength; index++){
    result += howManyMatchesByNumber(parseInt(arrayResult[index]));
  }
  return result;
}

function entryPoint(dataIn = Array()){
  const testCases = parseInt(dataIn.shift());
  for(let index = 0; index < testCases; index++){
    const aAndB = dataIn.shift().split(' ');
    console.log(numberOfMatchesNeeded(parseInt(aAndB[0]), parseInt(aAndB[1])));
  }
}

entryPoint(Array('3','123 234','10101 1010','4 4'));

module.exports = {
  howManyMatchesByNumber,
  numberOfMatchesNeeded,
}