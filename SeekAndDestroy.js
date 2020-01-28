
function destroyer(arr,...anotherParameters) {

    arr = arr.filter(function(value){
  
      return anotherParameters.indexOf(value) === -1;
  
  });
  
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  