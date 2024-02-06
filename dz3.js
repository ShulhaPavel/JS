function pow(x, y) {
    
    if (y === 0) {
        return 1;
    }
    
    let result = 1;
   
        let stepen;
    if (y < 0) {
        stepen = -1;
    } else {
        stepen = 1;
    }
    y = Math.abs(y); 
    
    
    for (let i = 0; i < y; i++) {
        result *= x;
    }

    
    return stepen === 1 ? result : 1 / result;
}

console.log(pow(2, 3))