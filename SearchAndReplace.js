
function myReplace(str, before, after) {
  
    if(/^[A-Z]/.test(before))
    {
      after = after[0].toUpperCase() + after.substr(1);
    }
    
    return str.replace(before,after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");