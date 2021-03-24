import AppNavbar from './AppNavbar';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Button,Input, Label} from "reactstrap";
import { Alert } from "reactstrap";
import BackendService from '../services/BackendService';

class ProjectManagerPage extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      content: "",
      error: "",
      projectName:""
    }
    this.createProject=this.createProject.bind(this);
    this.addEmployee=this.addEmployee.bind(this);
  }

  changeProjectNameHandler=(event) => {
    this.setState({projectName: event.target.value});
}

  
  createProject=(e)=>{
    e.preventDefault();
    let project={projectName: this.state.projectName};
console.log('employee =>'+JSON.stringify(project)); 
BackendService.createProject(project,this.state.projectName).then(res =>{
  this.props.history.push('/pm');
  }
  );}

  componentDidMount() {
    BackendService.getPmBoard()
    .then( response => {
      this.setState({
        content: response.data
      })
    } , error => {
      console.log(error);
      this.setState({
        error: error.toString()
      }); 
    });
  }

  addEmployee(){
    this.props.history.push('/create-employee');
}


  /*createProject(){
    this.props.history.push();
}*/


  render() {
    return (
      <div>
        <AppNavbar/>
        <div className = "card col-md-4 offset-md-4 alert alert-primary" style={{marginTop:"13%"}}>                    
          <div className = "card-body alert alert-primary">
        <form>
                <Label ><h2>Add Project</h2></Label>
                <Input autoFocus        
                  type="text" 
                  placeholder="Enter Project Name"
                  value={this.state.projectName}
                  onChange={this.changeProjectNameHandler}
                />
              <Button variant="primary" onClick={this.createProject} type="submit" className="btn bg-primary btn-block mt-4">
                Add Project
              </Button>
                   <Button  varient="primary" className="btn bg-primary btn-block mt-4 " onClick={this.addEmployee}>Add Employee</Button>
                    </form>
                    </div>
                    </div>
                    </div>
    );
  }
}

export default ProjectManagerPage;