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