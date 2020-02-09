
function steamrollArray(arr) {
  
    let flattenedArray = [];
  
    let flatten = function(input) 
    {
      if (!Array.isArray(input))
        flattenedArray.push(input);
      else
      {
        for (var item in input) 
          flatten(input[item]); // recursive
      }
    };
  
    arr.forEach(flatten);
  
    return flattenedArray;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  