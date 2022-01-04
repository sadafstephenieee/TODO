const { application, response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const Student = require("./Models/students");
const Registration = require("./Models/registration");
const Teachers = require("./Models/teachers");
const cookieParser = require("cookie-parser")
const {createTokens , validToken } = require("./Models/cookie")
const bodyParser  = require('body-parser');
const bcrypt = require("bcrypt");
var cors = require("cors");
const fetch = require('node-fetch');
var mongodb = require('mongodb');;

const app = express();
app.set("view engine" , "ejs");
// app.set("view files" , "ejs");
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(bodyParser.json({ limit: '500mb' })); // support json encoded bodies

let db;
const mongo_url = "mongodb://localhost:27017/educator"
mongoose.connect(mongo_url)
    .then((db_connection) => {
        app.listen("3001")
        db = db_connection
    })
    .catch((error) => console.log(error));


app.get("/student" , async (req, res)=>{
    let students = await Student.find();
    res.json({docs : students});
});

app.delete("/student/:_id" , async (req, res)=>{
    await Student.findOneAndRemove({_id : mongoose.Types.ObjectId(req.params._id)})
    // Student.deleteOne({_id : new mongodb.ObjectId(_id)})
    // Student.findByIdAndDelete(req.params._id)
    res.json({deleted : true});
});

app.post("/student" , async (req, res)=>{
    const student = new Student({
        name :  req.body.name,
        class :  req.body.class,
        classTeacher :  req.body.classTeacher
    });
    const doc = await student.save();
    console.log(req.body)
    res.json({_id : doc._id});
    
});
app.post("/teachers" , async(req, res) => {
    const teacher = new Teachers({
        name :  req.body.name,
        salary :  req.body.salary,
        phone_No :  req.body.phone_no,
        education  : req.body.education,
        address : req.body.address
    });
    const  doc = await teacher.save();
    res.json({response : "hello"});
    console.log(doc)

    // console.log("asd",req.body)
});
app.get("/teachers", async(req,res) => {
    const response = await Teachers.find()
    res.json({docs : response});
    res.send(response)
});
app.delete("/teachers/:_id", async (req,res) => {
    let teache = await Teachers.findOneAndRemove({ _id : mongoose.Types.ObjectId(req.params._id)})
    res.json({deleted : req.params._id});
    console.log("dsasd")
});
app.post("/registration", (req,res) => {
    const {username , password} = req.body
    // const login = new Login({
    //     email : "sfd",
    //     password : "SDf"
    // })
    // const doc = await login.save()
    // res.json({response : "hello"});
    bcrypt.hash(password , 1).then((hash) => {
        const registration = new Registration({
            username : username,
            password : hash
        });
        registration.save()
        .then(() => res.json({yes : true}))
        .catch((err)=> res.status(400).json({yes : false}));
    })
    console.log("sdan");
});
app.post("/login",async (req,res) => {
    const {username , password } = req.body;
    const user = await Registration.findOne({username : username});
    if(!user) res.json({response : "sorry user dosn't exist"});
    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match)=>{
        if(!match){
            res.json({response : "wrong username and password"});
        }else{
            const accessTokens = createTokens(user);
            res.cookie("access-token" , accessTokens , {
                maxAge: 60 * 60 * 24 * 30 * 1000,
                httpOnly : true,
            });
            res.json({response : "Logged In" , cookie : req.cookies()});
        };
    });
});
app.get("/profile" , validToken , (req , res)=>{
    res.json("profile");
});