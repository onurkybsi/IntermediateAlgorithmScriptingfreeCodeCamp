
function sumAll(arr) {
  
  let result = 0;
  let lowerBound = Math.min(...arr);
  let upperBound = Math.max(...arr);

  for(let i = lowerBound; i <= upperBound; i++)
  {
    result += i;
  }

  return result;
}

sumAll([1, 4]);
