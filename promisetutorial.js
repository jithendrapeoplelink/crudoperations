require('./src/db/mongoosetest')
const Employee = require('./src/models/employee')
const id1 = "5d9070a2760c8d0f1c54cde0"


const updaterecord = async(id,name)=>{

const up = await Employee.findByIdAndUpdate(id,{name})
const count = await Employee.countDocuments(name)
return count
}

updaterecord(id1,'Hari').then((res)=>{
console.log(res)

})

// Employee.findById(id).then((res)=>{

// console.log(res)

// return Employee.countDocuments(res)

// }).then((res1)=>{

//     console.log(res1)
// })


// const sub = (a,b)=>{

// return new Promise((resolve,reject)=>{

// resolve(a+b)
// })

// }

// // sub(20,10).then((sub1)=>{
// //     console.log(sub1)
// //     sub(sub1,5).then((sub2)=>{console.log(sub2)})
// // })

// sub(20,5).then((sub1)=>{
//     console.log(sub1)
//     return sub(sub1, 5)
// }).then((sub2)=>{
//     console.log(sub2)
//     return sub(sub2, 5)
// }).then((sub3)=>{
//     console.log(sub3)
// })

