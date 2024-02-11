function pad(str, char, count, toStart) {
    if (typeof str !== 'string' || typeof char !== 'string' || typeof count !== 'number' || typeof toStart !== 'boolean') {
      return undefined;
    }
  
    if (count <= str.length) {
      return str;
    }
  
    return toStart ? str.padStart(count, char) : str.padEnd(count, char);
  }
  
  console.log(pad('qwerty', '+', 10, true)); 
  console.log(pad('qwerty', '+', 10, false)); 
  console.log(pad('qwerty', '+', 7, true)); 
  console.log(pad('qwerty', '+', 7, false)); 
  console.log(pad('qwerty', 123, 6, false)); 

  