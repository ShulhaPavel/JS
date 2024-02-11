function myIsNaN(value) {
    return value !== value;
  }
  
  console.log(myIsNaN(NaN));      
  console.log(myIsNaN(123));      
  console.log(myIsNaN("abc"));    
  console.log(myIsNaN(undefined));
  console.log(myIsNaN(null));     
 