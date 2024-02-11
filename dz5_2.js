var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  // Додаємо нову послугу
  services["Розбити скло"] = "200 грн";
  services["Cупер стрижка"] = "1777 грн";
  services["Кава"] = "20 грн";
  
  services.price = function() {
    let totalPrice = 0;
    for (let price of Object.values(this)) {
      if (typeof price === 'string') {
        totalPrice += parseInt(price);
      }
    }
    return totalPrice;
  };
  
  services.minPrice = function() {
    let minPrice = 10000;
    for (let price of Object.values(services)) {
      if (typeof price === 'string') {
        let minus = parseInt(price);
        if (minus < minPrice) {
          minPrice = minus;
        }
      }
    }
    return minPrice;
  };
  
  services.maxPrice = function() {
    let maxPrice = 0;
    for (let  price of Object.values(services)) {
      if (typeof price === 'string') {
        let plus = parseInt(price);
        if (plus > maxPrice) {
          maxPrice = plus;
        }
      }
    }
    return maxPrice;
  };
  
  console.log("Загальна вартість послуг: " + services.price() + " грн");
  console.log("Мінімальна вартість послуги: " + services.minPrice() + " грн");
  console.log("Максимальна вартість послуги: " + services.maxPrice() + " грн");
  