import React from "react"
import Master from "../../Layout/Master"
import {browserHistory} from "react-router";


class Add extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            class : "",
            classTeacher : "",
            doc: false,
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleClassChange = this.handleClassChange.bind(this);
        this.handleClassTeacherChange = this.handleClassTeacherChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleNameChange(e){
        this.setState({
            name : e.target.value
        });
    };
    handleClassChange(e){
        this.setState({
            class : e.target.value
        });
    };
    handleClassTeacherChange(e){
        this.setState({
            classTeacher : e.target.value
        });
    };

    async onSubmit(){
        const data = { name: this.state.name , class : this.state.class ,  classTeacher : this.state.classTeacher}
        let response = await fetch("http://localhost:3001/student",  {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        await response.json()
        console.log("SDF")
        this.setState({
            doc : true
        });
        if(this.state.doc = true){
            window.location.href="/students";
        }
        else{
            console.log("not working");
        };

    };
    
    render() {
        return(
            <div>
                <Master />
                <div className="panel panel-default panel-table col-sm-6 col-sm-offset-3 up  ">
                    <div className="be-content">
                        <div className="main-content container-fluid">
                            <div className="main-content container-fluid">
                                <div className="row"></div>
                                    <form className="form-horizontal" >
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-8">
                                            <h1>Add Student</h1>
                                            <label >Name:</label><br/>
                                            <input type="text" className="form-control"  id="fname" value={this.state.name} onChange={this.handleNameChange}  name="name" /><br/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-8">
                                            <label >Class:</label><br/>
                                            <input type="text" className="form-control"  id="lname" value={this.state.class} onChange={this.handleClassChange} name="class" /><br/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-8">
                                            <label >Class Teacher:</label><br/>
                                            <input type="text" className="form-control"  id="lname" value={this.state.classTeacher} onChange={this.handleClassTeacherChange} name="cteacher" /><br/>
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
                {/* <form class="form-horizontal" >
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Name:</label>
                        <div className="col-sm-10">
                        <input className="form-control"  type="text"value={this.state.classTeacher} onChange={this.handleClassTeacherChange} name="cteacher" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="pwd">Class:</label>
                        <div class="col-sm-10">
                        <input class="form-control" type="text"value={this.state.classTeacher} onChange={this.handleClassTeacherChange} name="cteacher" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="pwd">Class Teacher:</label>
                        <div class="col-sm-10">
                        <input class="form-control" type="text" value={this.state.classTeacher} onChange={this.handleClassTeacherChange} name="cteacher" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                        <button type="button" value="Submit" onClick={this.hanglelogin} className="btn btn-default">Submit</button>
                        </div>
                    </div>
                </form> */}
            </div>
        )
    }
}
export default Add;