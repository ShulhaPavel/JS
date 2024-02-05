const unit = 'кг';
const value = 6;

let result;

switch(unit) {
    case 'км':
        result = value * 1000; 
        console.log(value + ' км це ' + result + ' м. ');
        break;
    case 'години':
        result = value * 60; 
        console.log(value + ' години це ' + result + ' хв.');
        break;
    case 'кг':
        result = value * 1000; 
        console.log(value + ' кг це' + result + ' г.' );
        break;
    default:
        console.log('Невідома одиниця виміру');
        return;
}
return result;


// var prompt = require('prompt');

// //
// // Start the prompt
// //
// prompt.start();

// //
// // Get two properties from the user: username and email
// //
// prompt.get(['age'], function (err, result) {

//     let input = parseInt(result.age);

//     if(input > 0) {
        
//         let last_number = input % 10;

//         if (input === 1 || (input > 20 && last_number === 1)) {
//             console.log (input  + " рік");
//         } else if (
//         (input >= 2 && input <= 4) || (input > 20 && last_number >= 2 && last_number <= 4)
//         ){
//             console.log (input  + " роки");
//         }else {
//             console.log (input  + " років");
//         }
//     }
//     else{
//         console.log("Помилка: ви ввели відємне число");
//     }
// });

