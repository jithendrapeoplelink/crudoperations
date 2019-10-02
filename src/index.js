const express = require('express')
require('./db/mongoosetest')
const Employee = require('./models/employee')
const Task = require('./models/task')
const Book = require('./models/books')

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())

// app.post('/users', async (req,res)=>{
// const emp = new Employee(req.body)
// await emp.save()
// res.status(201).send(emp)

// // emp.save().then(()=>{
// // res.send(emp)

// // }).catch((e)=>{
// // res.status(400).send(e)

// })

// app.get('/users',async(req,res)=>{

//    const emp1 = await Employee.find({})
//     res.send(emp1)

// //     Employee.find({}).then((employee)=>{
// //         res.send(employee)

// //     }).catch((e)=>{
// // res.status(500).send(e)
        
// //     })
// })

app.get('/users/:id', async (req,res)=>{

    const _id = req.params.id

    const del = await Employee.findByIdAndDelete(_id)
    const count = await Employee.countDocuments(_id)

    res.send(del)

// Employee.findByIdAndDelete(_id).then((employee)=>{
//     if(!employee){
//       res.status(404).send()
//     }
// res.send(del)
// res.send('Record Deleted')

// })

})


// app.post('/task', (req,res)=>{

//    // res.send('test')
// // console.log((req.body))
// const task = new Task(req.body)
// task.save().then(()=>{

// res.send(task)

// }).catch((e)=>{
//  res.status(400).send(e)
//  })

// })


// app.post('/book', (req,res)=>{
// res.send('book test')

// })



 //})

app.listen(port,()=>{

    console.log('listening to port'+port)
})
