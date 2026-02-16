// callback function pass argument to another function so it called call back function

function greet(name) {
    console.log('Hello ' + name);
}

function user(call) {
    var name = 'John';
    call(name);
}

user(greet); 