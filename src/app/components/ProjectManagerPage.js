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

  /*createProject(){
    this.props.history.push();
}*/


  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          {
            this.state.content ? (
              <div style={{marginTop: "20px"}}>
                <Alert color="info">
                  <h2>{this.state.content}</h2>
                </Alert>
              </div>
            ) : (
              <div style={{marginTop: "20px"}}>
                <Alert color="danger">
                  {this.state.error}
                </Alert>
              </div>
            )
          }
        </Container>
        <form>
                <Label>Add Project</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter Project Name"
                  value={this.state.projectName}
                  onChange={this.changeProjectNameHandler}
                />
              <Button variant="primary" onClick={this.createProject} type="submit" className="btn bg-primary">
                Add Project
              </Button>
        </form>
      </div>
    );
  }
}

export default ProjectManagerPage;