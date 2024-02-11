function Probability(count) {
  
    let even = 0; 
    let odd = 0; 
  
    
    for (let i = 0; i < count; i++) {
     
      const randomNumber = Math.floor(Math.random() * 901) + 100;
     
      if (randomNumber % 2 === 0) {
        even++; 
      } else {
        odd++; 
      }
    }
  
    const totalNumbers = even + odd; 
    const evenPercentage = (even / totalNumbers) * 100; 
    const oddPercentage = (odd / totalNumbers) * 100;
  
    console.log("Кількість згенерованих чисел: " + totalNumbers);
    console.log("Парних чисел: " + even);
    console.log("Непарних чисел: " + odd);
    console.log("Відсоток парних до не парних: " + evenPercentage.toFixed(2) + "% : " + oddPercentage.toFixed(2) + "%");
  }
  
  Probability(1000);
  