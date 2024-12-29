const express = require('express')
const path = require('path')
const app=express()
const bookRouter = require('./routes/bookRoutes')




app.use('/books',bookRouter)


app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
})



app.listen(3000,()=>{
    console.log("Server started")
})
