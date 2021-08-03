const mongoose=require('mongoose');

const ProjectsSchema=mongoose.Schema({
    Project_name:{
        type:String,
        //required:true
    },
    Start_date:{
        type:Date,
        //required:true
    },
    Planned_end_date:{
        type:Date,
        //required:true
    },
    Description:{
        type:String,
        //required:true
    },
    Project_Code:{
        type:String,
        //required:true
    }
});

module.exports=mongoose.model("projects",ProjectsSchema)