const mongoose = require("mongoose")

const  schema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
})


const Registration = mongoose.model("Registration" , schema)

module.exports = Registration