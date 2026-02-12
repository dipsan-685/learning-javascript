const studentdata = {
    name: "dipsan",
    age: 18,
    address: manigram,
};

// Accessing properties
console.log(studentdata.name); // dipsan
console.log(studentdata.age); // 18
console.log(studentdata.address); // manigram

// Modifying properties
studentdata.age = 19;
console.log(studentdata.age); // 19

studentdata["name"] = "john";
console.log(studentdata.name); // john

// Adding new properties
studentdata.grade = "A";
console.log(studentdata.grade); // A