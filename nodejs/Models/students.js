const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name : { 
        type : String,
        required : true
    },
    class : {
        type : String ,
        required : true
    },
    classTeacher : {
        type : String , 
        required : true
    }
} , {timestamps : true})

const Student = mongoose.model("students" , schema)


module.exports = Student