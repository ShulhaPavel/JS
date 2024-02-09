var car = {
    name: 'Audi',
    model: 'Q7',
    year: 2019,
};

     function getInfo(car) {
        for (let key in car){
            console.log(key + ': ' + car[key]);
        };
    }
    
getInfo(car);

car.maxSpeed = 240;

getInfo(car);
