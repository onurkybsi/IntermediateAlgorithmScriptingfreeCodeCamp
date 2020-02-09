
function sumPrimes(num) {

    let result = 0;
  
    for(var i = num; i > 1; i--)
    {
      for(var j = i-1; j > 0; j--)
        if(i % j == 0 && j != 1)  break;
      
      if(j == 0)  result += i;
    }
  
    return result;
  }
  
  sumPrimes(10);