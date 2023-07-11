//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));


function getLastDigitOfANumber(number = 0){
  if(number < 10) return number;
  else return number%10;
}

function itsLastDigitIs239(number = 0) {
  switch (true) {
    case number === 2: return true;
    case number === 3: return true;
    case number === 9: return true;
    default: return false;
  }
}

function watchTheNumbersBetweenLandR(l = 0, r = 0){
  return function(fnLogic){
    return function(fnPredicate){
      let result = 0;
      for(let index = l; index <= r; index++){
        const digit = fnLogic(index);
        if(fnPredicate(digit)) result += 1;
      }
      return result;
    }
  }
}

function entryPoint(dataIn){
  const testCases = Number(dataIn.shift());
  for(let index = 0; index < testCases; index++){
    const range = dataIn.shift().split(' ');
    const l = Number(range[0]);
    const r = Number(range[1]);
    const result = watchTheNumbersBetweenLandR(l,r)(getLastDigitOfANumber)(itsLastDigitIs239);
    console.log(result);
  }
}

entryPoint(Array('2','1 10','11 33'));

module.exports = {
  getLastDigitOfANumber,
  itsLastDigitIs239, 
  watchTheNumbersBetweenLandR,
}