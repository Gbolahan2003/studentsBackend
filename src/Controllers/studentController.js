const app = requirre('express')
const Student = require('../schemas/studentSchema')

exports.getAllStudents =  async(req,res)=>{
    const student = await Student.find()

    res.status(200).json({
        status:'success',
        results:student.length,
        data:{
            student
        }
    })
}


exports.getStudent = async(req,res)=>{
try{
    const student = await Student.find(req.params.id)
    if(!student){
        res.status(400).json({
            status:'failed',
            Error:'Student not found '
        })
    }
    res.status(200).json({
        status:'success',
        student
    })
}catch(err){
    return ('there was an error fetching the student', err);
}
}


exports.createStudent= async(req,res)=>{
    try{
        const newStudent= await Student.create(req.body)
        res.status(201).json({
            status:'New student field has been created successfully',
            data:{
                student: newStudent
            }
        })

    }catch(err){
        return ('there was an error creating the student field', err);

    }
}

exports.UpdateStudent = async(req,res)=>{
    try{
        const student= await Student.findByIDandUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        if(!student){
            return ('Student does not exist');
        }
        res.status(200).json({
            status:'success',
            data:{
                student
            }
        })
    }catch(err){
        console.log('there was an error updating the student data', err);

    }
}

exports.deleteStudent= async(req,res)=>{
    try{
        const student = await Student.findByIDandDelete(req.params.id)
        res.status(204).json({
            status:'success',
            data:null
        })
        if(!student){
            return 'student does nt exist'
        }
    }catch(err){
        return ( 'there is an error trying to delete the student data', err)
    }
}