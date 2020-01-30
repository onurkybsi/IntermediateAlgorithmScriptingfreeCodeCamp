
function uniteUnique(...arr) {

    let result = [];
  
    arr.forEach(function(element){
  
      element.forEach(function(element){
  
        if(result.indexOf(element) === -1)
          result.push(element);
      });
    });
    
    return result;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  