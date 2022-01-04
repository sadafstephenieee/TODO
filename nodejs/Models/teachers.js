const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },
    phone_No : {
        type : String,
        required : true
    },
    education : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
});

const Teachers = mongoose.model("Teachers" , schema);
module.exports = Teachers;