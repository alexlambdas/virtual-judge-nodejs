//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

function smallFactorial(number = 0n) {
  let factorial = 0n;
  let index = 0n;
  if(number === 0n) factorial = 1n;
  else {
    for(index = number; index >= 1n; index--){
      if(index === number) factorial = index;
      else factorial *= index;
    }
  }
  return factorial;
}

function entryPoint(dataIn){
  const testCases = parseInt(dataIn.shift());
  let result = 0n;
  for(let index = 0; index < testCases; index++){
    result = smallFactorial(BigInt(dataIn.shift()));
    console.log(result.toString());
  }
}

entryPoint(Array('4','1','2','5','3'));