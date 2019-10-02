const mongoose = require('mongoose')


const Book = mongoose.model('book',{

isbn:{
    type: Number
},

name:{
type: String
}


})

module.exports = Book