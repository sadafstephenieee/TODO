// import logo from './logo.svg';
import './App.css';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Add from './Components/Student/add';
import TeacherAdd from './Components/Teacher/add';
import Students from './Components/Student/students';
// import Students from './students';
import React from "react"
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Master from './Layout/Master';
import Home from './Components/Home';
import Teachers from './Components/Teacher/Teacher';
import Registration from './Components/Registration/registration';
import Login from './Components/Login/login';


  
class App extends React.Component {
    constructor(){
        super()
        this.state = {docs : []};
    };

    render() {
        return(
            <>
                <div className='App'>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/student/add" element={<Add/>}></Route>
                            <Route path="/students" element={<Students/>}></Route>
                            <Route path="/teachers" element={<Teachers/>}></Route>
                            <Route path="/teacher/add" element={<TeacherAdd/>}></Route>
                            <Route path="/registration" element={<Registration/>}></Route>
                            <Route path="/login" element={<Login/>}></Route>
                        </Routes>
                    </Router>
                </div>
        </>
        );
    };
};
export default App;
