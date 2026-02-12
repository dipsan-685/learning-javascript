const studentdata = {
    name: "jone ",
    age: 20,
    address: "manigram",
    isgraduated: false,
    changename: function(name){
        this.name = name;
    },

    marks: {
        math: 90,
        science: 85,
        english: 92

    },
    workdays: [1,2,3,4,5]  
    

};

console.log(studentdata.name); // entire object
// Accessing properties
console.log(studentdata.age); // 20
console.log(studentdata.address); // manigram
console.log(studentdata.isgraduated); // false
console.log(studentdata.marks.math); // 90
console.log(studentdata.workdays[2]); // 3

studentdata.changename("dipsan");
console.log(studentdata.name);  
