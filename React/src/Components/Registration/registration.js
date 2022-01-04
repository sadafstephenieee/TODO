import {React,Component} from 'react';
import {Link} from 'react-router-dom'
import Master from '../../Layout/Master';

class Registration extends Component {
    constructor(props){
        super(props)
        this.state = {
            response : [],
            username : "",
            password : "",
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
    async onSubmit(){
        const data = {username : this.state.username , password : this.state.password}
        let response = await fetch("http://localhost:3001/registration",{
            method : "POST",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        response = await response.json();

        this.setState({
            response : response.yes
        });
        if(this.state.doc= true){
            window.location.href="/";
        }
        else{
            console.log("sorry");
        };
        // console.log("asd",this.state.response)
    };
    render() {
        console.log(this.state.password , this.state.email)
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
                                            <h1>Registration</h1>
                                            <label >username:</label><br/>
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
                                            <button type="button" value="Submit" className="btn btn-default" onClick={this.onSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
  
export default Registration;