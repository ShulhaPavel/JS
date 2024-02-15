var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var firstEmail = arr[0].email;
var secondEmail = arr[1].email;
var thirdEmail = arr[2].email;



var re = /^[a-z0-9]+(\.[a-z0-9]+)*@(gmail.com|yahoo.com)$/;

console.log(re.test(firstEmail));
console.log(re.test(secondEmail));
console.log(re.test(thirdEmail));