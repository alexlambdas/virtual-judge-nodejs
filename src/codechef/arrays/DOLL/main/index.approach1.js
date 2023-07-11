//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

function isAliVisibleInHisLineOfSight(arrayIn = Array(), arrayLength = 0, height = 0) {
  let minimunNumber = 0;
  for(let index = 0; index < arrayLength; index++){
    if(parseInt(arrayIn[index]) > height) minimunNumber += 1;
  }
  return minimunNumber;
}


function entryPoint(dataIn = Array()){
  const testCases = Number(dataIn.shift());
  for(let index = 0; index < testCases; index++){
    const nAndK = dataIn.shift().split(' ');
    console.log(isAliVisibleInHisLineOfSight(dataIn.shift().split(' '),parseInt(nAndK[0]),parseInt(nAndK[1])));
  }
}

entryPoint(Array('3','4 10','2 13 4 16','5 8','9 3 8 8 4','4 6','1 2 3 4'));

module.exports = {
  isAliVisibleInHisLineOfSight
}