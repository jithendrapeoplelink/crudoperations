const mongoclient = require('mongodb').MongoClient
const promise = require('promise')
const url = 'mongodb://localhost:27017'
const dbname = "CrudOperations"

mongoclient.connect(url,(err,client)=> {

if(err) {
    return console.log('not able to connect database')
}

const dba = client.db(dbname)

dba.collection('crudcollection').update({name:'Vamsi'},{$set:{name:'vishal'}},(err,res)=>{

console.log('document updated')

})

// dba.collection('crudcollection').deleteOne({name:'Tarun'},(err,res)=>{

// console.log(res)
// })

// dba.collection('crudcollection').find({}).toArray((err,res)=>{

// console.log(res)

// })

// dba.collection('crudcollection').countDocuments((err,result)=>{
//     console.log(result)

// })

})


// Inserting Multiple documents

//console.log('database created')
// dba.collection('crudcollection').insertMany([
//     { _id: "384929023" ,name: "shadow",eid: "83985904"},
// { _id: "738474",name: "scooby",eid: "8333347"}
// ])
// console.log('collection created')


