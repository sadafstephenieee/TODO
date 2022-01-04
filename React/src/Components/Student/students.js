import {React,Component} from 'react';
import {Link} from 'react-router-dom'
import Master from '../../Layout/Master';

class Students extends Component {
    constructor(props){
        super(props)
        this.state = {
            docs : [],
            openModal: false,
            cross: false,
            cancel: false,

        }
        this.add = this.add.bind(this)
        this.closemodal = this.closemodal.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleClassChange = this.handleClassChange.bind(this)
        this.handleClassTeacherChange = this.handleClassTeacherChange.bind(this)
    }
    add(){
        this.setState({
            openModal: true
        })
    }
    
    closemodal(){
        this.setState({
            openModal: false
        })
    }
    async callAPI(){
        let response = await fetch("http://localhost:3001/student")
        response = await response.json();
        console.log(response);
        this.setState({
            docs : response.docs
        });
    };
    
    componentDidMount(){
        this.callAPI();
    };
    
    async delete(id , index) {
        await fetch("http://localhost:3001/student/"+id,  {
            method: 'delete',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });

        this.state.docs.splice(index, 1);
        this.setState({docs: this.state.docs});

    };
    handleNameChange(e){
        this.setState({
            name : e.target.value
        })
    }
    handleClassChange(e){
        this.setState({
            class : e.target.value
        })
    }
    handleClassTeacherChange(e){
        this.setState({
            classTeacher : e.target.value
        })
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
                                            <h1 className="tools student col-sm-offset-2 col-sm-10" >Students</h1>
                                            <div className="tools button col-sm-offset-3 col-sm-10"><Link to="/student/add"><button className="btn btn-primary">Add</button></Link><span className="icon mdi mdi-download"></span><span className="icon mdi mdi-more-vert"></span></div>
                                            </div>
                                            <div className="panel-body ">
                                            <table className="table table-striped table-hover">
                                                <thead>
                                                <tr>
                                                    <th style={{marginLRight: "20px",width: '20%'}}>Name</th>
                                                    <th style={{width: '20%'}}>Class</th>
                                                    <th style={{width: '20%'}}>Class Teacher</th>
                                                    <th  style={{width: '20%'}}className="actions" span="2">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.docs.map((student , index)  => {
                                                        return <tr key={student._id}>
                                                            <td>{student.name}</td>
                                                            <td>{student.class}</td>
                                                            <td>{student.classTeacher}</td>
                                                            <td><button onClick={() => this.delete(student._id , index)}>Delete</button></td>
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
  
export default Students;