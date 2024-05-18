const mongoose=require('mongoose')
const studentModel=require('../models/student.models')



//function to retrive all students data
async function getStudents(req,res){
    try{
    const students=await studentModel.find()    //const students=await studentModel.find({}) gives the same result
    res.status(200).json(students)
    }
    catch(err)
    {
        console.log('could not get students data');
    }
}

//function to retrieve the student by id
async function getStudentById(req,res){
    const {id}=req.params
    const student=await studentModel.findById(id)                                   //findById
    if(!student)
    {
        res.status(404).json(`student with ${id} not found in the database`)
        return
    }
    res.status(200).json(student)
}


//function to insert student data
async function insertStudent(req,res){
    try{
        const {id,name,phone,email}=req.body
        console.log(req.body);
        const student=await studentModel.create({
            _id:id,
            name,
            phone,
            email
    
        })
        res.status(200).json(student);
       }
       catch(err)
       {
        console.log(err);
       }
}

//function to update the data
async function updateStudentData(req,res){
    try{
        const {id}=req.params
        const student=await studentModel.findByIdAndUpdate(id,req.body)                 //findByIdandUpdate
        if(!student)
        {
            res.status(404).json(`student with ${id} not found in the database`)
            return
        }
        else
        {   
            const updatedStudent=await studentModel.findById(id)
            res.status(200).json(updatedStudent)
        }
        }
        catch(err)
        {
            console.log('values are not updated....');
        }
}


//function to delete student
async function deleteStudent(req,res){
    const {id}=req.params
    const student=await studentModel.findByIdAndDelete(id,req.body)                 //findByIdandDelete
    if(!student)
    {
        res.status(404).json(`student with id  ${id} not found in the database`)
        return
    }
    else
    {   
        res.status(200).send('deletion successful.....')
    }
}



module.exports={
    getStudents,
    getStudentById,
    insertStudent,
    updateStudentData,
    deleteStudent
}