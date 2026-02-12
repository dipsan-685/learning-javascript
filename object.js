const studentdata = {
    name: "jone ",
    age: 20,
    address: "manigram",
    isgraduated: false,
    changename: function (name) {
        this.name = name;
    },

    marks: {
        math: 90,
        science: 85,
        english: 92

    },
    workdays: [1, 2, 3, 4, 5]


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


// emploey details

const employeedata = {
    name: "susan",
    id: 1001,
    age: 30,
    department: "software development",
    isfulltime: false,
}

// console.log(employeedata.name); // susan
// console.log(employeedata.id); // 1001   
// console.log(employeedata.age); // 30
// console.log(employeedata.department); // software development
// console.log(employeedata.isfulltime); // false

// for(const key in employeedata){
//     console.log(key);
//     console.log(employeedata[key]);
// }


// array of object
const videos = [
    {
        title: "javascript tutorial",
        views: "1000",
        duration: "10 minutes", 

    },
    {
        title: "html tutorial",
        views: "500k",
        duration: "15 minutes", 

    },
    {
        title: "css tutorial",
        views: "800k",
        duration: "20 minutes", 

    }
]

for (const key in videos) {
    console.log("\n" + videos[key].title);
    console.log(videos[key].views);
    console.log(videos[key].duration);
}