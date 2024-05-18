//import { getStudentById } from '../controllers/student.controller'
const express=require('express')
const routes=express.Router()
const studentModel=require('../models/student.models')
const {getStudentById}=require('../controllers/student.controller')
const {getStudents,insertStudent,updateStudentData,deleteStudent}=require('../controllers/student.controller')


//middlewares
routes.use(express.json())
routes.use(express.urlencoded({extended:true}))


//it will provide the data of all students
routes.get('/',getStudents)


//it will provide the data of a student with specific id
routes.get('/:id',getStudentById)

//route to insert student
routes.post('/',insertStudent)


//put method to update the student data with specific id
routes.put('/:id',updateStudentData)


//route to delete the student with specific id
routes.delete('/:id',deleteStudent)


module.exports=routes