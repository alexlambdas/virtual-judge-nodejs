function iterArray(array) {
  return function (fnApplication) {
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
      let acct = fnApplication.result();
      fnApplication.apply(array[index], acct);
    }
    return fnApplication.result();
  }
}



function localIsNumberOne(number){ return (number === 1)}

const linePattern = (function(){

  let acct = Array();

  //function localIsNumberOne(number){ return (number === 1)}
  
  function localApply(params){
    let number = params[0];
    let acctIn = params[1];
    acct = acctIn;

    if(localIsNumberOne(number)) acct.push('*');
    else acct.push('.');
  }
  

  return{
    apply(...params){ 
      localApply(params); 
    },
    isNumberOne(number){ 
      localIsNumberOne(number) 
    },
    result(){ 
      return acct; 
    }
  }
})();

const arrayForTest = [1,2,1,2,2,1];
const arrayResult = iterArray(arrayForTest)(linePattern);
console.log(arrayResult);

console.log("*********************************************");

function sum(...params){
  console.log(params);
}

sum(12,12,0,13,16,54);

console.log("*********************************************");

const closureTest = (function(){

  let acct = 0;

  function localApply(params){
    let x = params[0];
    let y = params[1];
    let acctIn = params[2];

    acct = x + y + acctIn;
  }

  return{
    apply(...params){
      localApply(params);
    },
    result(){
      return acct;
    }
  };

})();

for(let index = 0; index < 6; index++){
  let acct = closureTest.result();
  closureTest.apply(5,6,acct);
}

console.log(closureTest.result());