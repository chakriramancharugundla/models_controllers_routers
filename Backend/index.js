const express=require('express')

const mongoose=require('mongoose')
const app=express()
const studentRouters=require('./routers/student.routes')
require('dotenv').config()
const port=process.env.PORT;

//mongodb connection
mongoose.connect('mongodb://localhost:27017/sampledb')
.then(()=>console.log('connection successful'))
.catch(err=>console.log(err))

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//accessing routes from student.routes.js
app.use('/api/students',studentRouters)





app.listen(port,()=>console.log(`server started at ${port}.............`));