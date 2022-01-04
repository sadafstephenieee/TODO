import {React,Component} from 'react';
import {Link} from 'react-router-dom'
import Master from '../../Layout/Master';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            response : [],
            username : "",
            password : "",
            error : "",
            cookie : ""
        };
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    };

    onChangeUsername(e){
        this.setState({
            username  : e.target.value
        });
    };
    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
    };
    async profile(){
        let response = await fetch("http://localhost:3001/profile",{
            method : "GET",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
        })
        response = await response.json();
    };
    componentWillMount(){
        this.profile();
    }
    async onSubmit(){
        const data = {username : this.state.username , password : this.state.password}
        let response = await fetch("http://localhost:3001/login",{
            method : "POST",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        });
        response = await response.json();

        this.setState({
            response : response.response,
            cookie : response.cookie
        });

        if(this.state.response == "Logged In"){
            window.location.href="/";
        }else if(this.state.response == "sorry user dosn't exist"){
            this.setState({
                error : "sorry user dosn't exist"
            })
            console.log("sorry user dosn't exist");
        }else if(this.state.response == "wrong username and password"){
            this.setState({
                error : "wrong username and password"
            })
        }
        else{
            console.log("no response.");
        };
    };
    render() {
        return (
            <>  
                <Master />
                <div className="panel panel-default panel-table col-sm-6 col-sm-offset-3 ups  ">
                    <div className="be-content">
                        <div className="main-content container-fluid">
                            <div className="main-content container-fluid">
                                <div className="row"></div>
                                <form className="form-horizontal" >
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-8">
                                            <h1>Login</h1>
                                            <label >Username:</label><br/>
                                            <input type="text"  onChange={this.onChangeUsername}  value={this.state.username} className="form-control"  id="fname"name="name" /><br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-8">
                                            <label >Password:</label><br/>
                                            <input type="text"  onChange={this.onChangePassword}  value={this.state.password} className="form-control" name="salary" /><br/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-8">
                                            <button type="button" value="Submit" className="btn btn-default" onClick={this.onSubmit} >Submit</button>
                                        </div>
                                    </div>
                                </form> 
                                <h2>{this.state.error}</h2>
                                <h2> Cookie{this.state.cookie}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
  
export default Login;