const mongoose=require('mongoose')


const studentSchema=mongoose.Schema({
    _id:Number,
    name:String,
    phone:Number,
    email:String
})

const studentModel=mongoose.model("student",studentSchema)      //(collection-name,schema-name)


module.exports=studentModel