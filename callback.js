// callback function pass argument to another function so it called call back function

// normal function 
function a() {
    console.log('I am a function');
}


//arrow function 
const b = () => {
    console.log('I am an arrow function');
}

// callback function
function greet(name) {
    console.log('Hello ' + name);
}

function user(call) {
    var name = 'John';
    call(name);
}

user(greet); 

//create a hof function called calculate and perform operaation 
//based on callback function

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

const subtract = (x,y)=> x-y;


console.log(calculate(10, 5, add)); 
console.log(calculate(10, 5, subtract));

