const mongoose = require('mongoose')


const Task = mongoose.model('task',{

taskid:{

    type: Number
},

taskname:{

    type: String
}


})

module.exports = Task