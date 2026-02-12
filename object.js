const studentdata = {
    name: "jone ",
    age: 20,
    address: "manigram",
    isgraduated: false,
    changename: function(name){
        this.name = name;
    }

};

console.log(studentdata.name); // entire object
// Accessing properties
console.log(studentdata.age); // 20
console.log(studentdata.address); // manigram
console.log(studentdata.isgraduated); // false

studentdata.changename("dipsan");
console.log(studentdata.name);  
