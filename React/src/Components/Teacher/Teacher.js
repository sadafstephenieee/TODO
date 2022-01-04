import {React,Component} from 'react';
import {Link} from 'react-router-dom'
import Master from '../../Layout/Master';

class Teachers extends Component {
    constructor(props){
        super(props)
        this.state = {
            response : []
        };
        this.onDelete = this.onDelete.bind(this)
    }
    async callapi(){
        let response = await fetch("http://localhost:3001/teachers")
        response = await response.json();
        this.setState({
            response : response.docs
        });

    };
    componentDidMount(){
        this.callapi();
    };
    async onDelete(id , index){
        let response = await fetch("http://localhost:3001/teachers/"+id,{
            method : "DELETE",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            }
        });
        this.state.response.splice(index , 1)
        this.setState({
            response : this.state.response
        })
        console.log("index" , index) 
    }
    render() {
        return (
            <>  
                <Master />
                <div className="be-content">
                    <div className="main-content container-fluid">
                        <div className="main-content container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="panel panel-default panel-table">
                                        <div className="panel-heading">
                                            <h1 className="tools student col-sm-offset-2 col-sm-10" >Teachers</h1>
                                            <div className="tools button col-sm-offset-3 col-sm-10"><Link to="/teacher/add"><button className="btn btn-primary">Add</button></Link><span className="icon mdi mdi-download"></span><span className="icon mdi mdi-more-vert"></span></div>
                                            </div>
                                            <div className="panel-body ">
                                            <table className="table table-striped table-hover">
                                                <thead>
                                                <tr>
                                                    <th style={{marginLRight: "20px",width: '10%'}}>No</th>
                                                    <th style={{marginLRight: "20px",width: '15%'}}>Name</th>
                                                    <th style={{width: '15%'}}>Salary</th>
                                                    <th style={{width: '15%'}}>Phone No </th>
                                                    <th style={{width: '15%'}}>Education </th>
                                                    <th style={{width: '15%'}}>House Adress </th>
                                                    <th className="actions " style={{width: '20%'}} span="2">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.response.map((teacher , index)  => {
                                                        return <tr key={teacher._id}>
                                                            <td>{index}</td>
                                                            <td>{teacher.name}</td>
                                                            <td>{teacher.salary}</td>
                                                            <td>{teacher.phone_No}</td>
                                                            <td>{teacher.education}</td>
                                                            <td>{teacher.address}</td>
                                                            <td><button onClick={() => this.onDelete(teacher._id , index)}>Delete</button></td>
                                                        </tr>
                                                    })};
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
}
  
export default Teachers;