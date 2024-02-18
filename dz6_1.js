function myBlend(arr) {
    arr.sort(() => Math.random() - Math.random());
    return arr;
}


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myBlend(arr));
