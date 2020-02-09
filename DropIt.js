
function dropElements(arr, func) {
  
    let i = 0;
  
    while(func(arr[i]) != true)
      arr.shift();
    
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
  