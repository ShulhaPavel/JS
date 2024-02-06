// 1-ый способ реализаци с помощью циклов
function Triangle(height, symbol) {
    
 
    for (let i = 1; i <= height; i++) {
        let row = '';
        
        for (let j = 0; j < i; j++) {
            row += symbol;
        }
        
        console.log(row);
    }
}

Triangle(10, "+");


// 2-ый способ реализации с помощью методов
// function drawTriangle(height, symbol) {
//     if (height >= 1) console.log(symbol);
//     if (height >= 2) console.log(symbol + symbol);
//     if (height >= 3) console.log(symbol + symbol + symbol);
//     if (height >= 4) console.log(symbol + symbol + symbol + symbol);
//     if (height >= 5) console.log(symbol + symbol + symbol + symbol + symbol) ;
   
// }

// drawTriangle(5, "*");