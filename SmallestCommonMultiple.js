
function smallestCommons(arr)
{
  
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let result = max;

  for (var i = max - 1; i >= min; i--) 
  {
    if (result % i != 0)
    {
      result += max;
    
      i = max;
    }
  }
  
  return result;
};

smallestCommons([1,5]);
