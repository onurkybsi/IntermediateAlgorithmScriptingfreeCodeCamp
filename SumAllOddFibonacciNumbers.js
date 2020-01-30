
function sumFibs(num) {
  
    let result = 2;
    let fibonacciNumbers = [1,1];
    let nextValue = 0;
    let i = 1;
  
    while(nextValue = fibonacciNumbers[i] + fibonacciNumbers[i-1] <= num)
    {
      nextValue = fibonacciNumbers[i] + fibonacciNumbers[i-1];
  
      fibonacciNumbers.push(nextValue);
  
      if(nextValue % 2 !== 0)
        result += nextValue;
  
      i++;
    }
  
    return result;
  }
  
  sumFibs(4);
  