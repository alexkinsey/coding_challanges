function digital_root(n) {
  function toArray(number){
    return String(number).split("").map((number)=>{
      return Number(number)
    })
  }
  function reduceArray(array){
    return array.reduce((runningTotal, number) => {
      return runningTotal + number
    }, 0)
  }

  var result = toArray(n);
  result = reduceArray(result);

  while (result > 9) {
    result = toArray(result);
    result = reduceArray(result);
    console.log(result); 
  }
  return result;
}

digital_root(10199);
