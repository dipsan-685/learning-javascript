let arr =[1,2,3];

// console.log(arr);

// arr.push(1000)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(0);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.splice(1,1);
// console.log(arr);

// arr.reverse();
// console.log(arr);

// arr.sort();
// console.log(arr);

// arr = arr.join("-");
// console.log(arr);   


// method like map, filter, reduce

const numbers = [1, 2, 3, 4, 5];

// map method
const squaredNumbers = numbers.map(function (num) {
    return num * num;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// filter method
const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// reduce method
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15


const n =["john", "doe", "smith", "jane"];

const name = n.map(function (n) {
    return n.toUpperCase(); 

});
console.log(name); // ["JOHN", "DOE", "SMITH", "JANE"]


// filter out the product whose price is less then 1000
const products = [
    { name: "laptop", price: 1500 },
    { name: "phone", price: 800 },
    { name: "tablet", price: 1200 },
    { name: "headphones", price: 500 }
];

const expensiveProducts = products.filter(function (product) {
    return product.price > 1000;
});
console.log(expensiveProducts); 

// similarly try the some and every method 
const hasExpensiveProduct = products.some(function (product) {
    return product.price > 1000;
});
console.log(hasExpensiveProduct); // true

const allExpensiveProducts = products.every(function (product) {
    return product.price > 1000;
});
console.log(allExpensiveProducts); // false
