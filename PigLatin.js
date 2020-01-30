
function translatePigLatin(str) {
  
    if(['a', 'e', 'i', 'o', 'u'].indexOf(str[0]) !== -1)
    {
      return str.concat("way");
    }
    else if(str.match(/[aeiou]/gi) == null)
    {
      return str.concat("ay");
    }
    else
    {
      while(['a', 'e', 'i', 'o', 'u'].indexOf(str[0]) === -1)
      {
        var firstCharacter = str[0];
        str = str.substring(1).concat(firstCharacter);
      }
  
      return str.concat("ay");
    }
  }
  
  translatePigLatin("california");