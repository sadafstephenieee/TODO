import React from "react"
import Master from "../../Layout/Master"
import {browserHistory} from "react-router";


class Add extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            salary : "",
            phone_no : "",
            education : "",
            address : "",
            doc : false,
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
        this.onChangeEducation = this.onChangeEducation.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };
    onChangeName(e){
        this.setState({
            name : e.target.value
        });
    };
    onChangeSalary(e){
        this.setState({
            salary : e.target.value
        });
    };
    onChangePhoneNo(e){
        this.setState({
            phone_no : e.target.value
        });
    };
    onChangeEducation(e){
        this.setState({
            education : e.target.value
        });
    };
    onChangeAddress(e){
        this.setState({
            address : e.target.value
        });
    };
    async onSubmit(){
        const data = { name: this.state.name , salary: this.state.salary , phone_no: this.state.phone_no , education: this.state.education , address: this.state.address}
        let response = await fetch("http://localhost:3001/teachers",  {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        response = await response.json();

        this.setState({
            name: "",
            salary : "",
            phone_no : "",
            education : "",
            address : "",
            doc : true
        });
        if(this.state.doc = true){
            window.location.href="/teachers";
        }
        else{
            console.log("not working");
        };
    };



    render() {
        return(
            <div>
                <Master />
                <div className="panel panel-default panel-table col-sm-6 col-sm-offset-3 ups  ">
                    <div className="be-content">
                        <div className="main-content container-fluid">
                            <div className="main-content container-fluid">
                                <div className="row"></div>
                                    <form className="form-horizontal" >
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-8">
                                                <h1>Add Teacher</h1>
                                                <label >Name:</label><br/>
                                                <input type="text" className="form-control"  id="fname" onChange={this.onChangeName} value={this.state.name} name="name" /><br/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-8">
                                                <label >Salary:</label><br/>
                                                <input type="text" className="form-control"  onChange={this.onChangeSalary}  value={this.state.salary} name="salary" /><br/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-8">
                                                <label >Phone No:</label><br/>
                                                <input type="text" className="form-control" onChange={this.onChangePhoneNo}  value={this.state.phone_no} name="phone no" /><br/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-8">
                                                <label >Education:</label><br/>
                                                <input type="text" className="form-control" onChange={this.onChangeEducation}   value={this.state.education} name="education" /><br/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-8">
                                                <label>Address:</label><br/>
                                                <input type="text" className="form-control" onChange={this.onChangeAddress}   value={this.state.address} name="address" /><br/>
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
            </div>
        )
    }
}
export default Add;