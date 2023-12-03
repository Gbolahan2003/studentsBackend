const express =require('express')
const router = express.Router()
const StudentCntroller = require('../Controllers/studentController.js')
const AuthController = require('../auth/Auth.js')
router.route('/')
.get(StudentCntroller.getAllStudents)
.post(StudentCntroller.createStudent)

router.route(':/id')
.get(StudentCntroller.getStudent)
.patch(StudentCntroller.UpdateStudent)
.delete(StudentCntroller.deleteStudent)

router.route('/register').post(AuthController.registerStudent)


module.exports= router