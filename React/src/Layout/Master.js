import { prettyDOM } from '@testing-library/react';
import {React, Component} from 'react';
import {Link} from "react-router-dom"


class Master extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <nav className="bgColor ">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/">
                                <a className="navbar-brand">The Educator</a>
                            </Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/students">
                                    <a>Students</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/teachers">
                                    <a>Teachers</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/registration">
                                    <a>Registration</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}
export default Master;