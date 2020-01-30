
function pairElement(str) {

    let result = [[]];
  
    let pairs = [];
  
    str.split("").forEach(function(element)
    {
      switch(element)
      {
        case 'A':
          pairs.push('A');
          pairs.push('T');
          result.push(pairs);
          pairs = [];
          break;
        case 'T':
          pairs.push('T');
          pairs.push('A');
          result.push(pairs);
          pairs = [];
          break;
        case 'C':
          pairs.push('C');
          pairs.push('G');
          result.push(pairs);
          pairs = [];
          break;
        case 'G':
          pairs.push('G');
          pairs.push('C');
          result.push(pairs);
          pairs = [];
          break;
      }
    });
  
    result.shift();
  
    return result;
  }
  
  pairElement("GCG");
  