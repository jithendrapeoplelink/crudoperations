require('./db/mongoosetest')
const Book = require('./models/books')
const express = require('express')
const app =express()

app.use(express.json())

const port = process.env.PORT || 5000

app.post('/book',(req,res)=>{

    const book = new Book(req.body)
    book.save().then(()=>{
     res.send(book)

    }).catch((e)=>{

        res.send(e)

    })

    //console.log(req.body)

//res.send('test')

})

app.listen(port,()=>{

    console.log('listening to port:'+port)
})
