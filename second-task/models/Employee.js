const mongoose=require('mongoose');

const EmployeesSchema=mongoose.Schema({
    name:{
        type:String,
        //required:true
    },
    adress:{
        type:String,
        //required:true
    },
    email:{
        type:String,
        //required:true
    },
    hire_date:{
        type:Date,
    },
    salary:{
        type:Number,
        //required:true
    },
    job_title:{
        type:String,
        //required:true
    },
    project_id:{
        type:String
    }
});

module.exports= mongoose.model('Employee',EmployeesSchema)