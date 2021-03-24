import { Alert } from "reactstrap";
import BackendService from '../services/BackendService';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Button,Input, Label} from "reactstrap";
import AppNavbar from './AppNavbar';

class  CreateEmployeeComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      content: "",
      error: "",
      projectname:"",
      useremail:""
    }
    this.createEmployee=this.createEmployee.bind(this);
  }

  changeProjectNameHandler=(event) => {
    this.setState({projectname: event.target.value});
}

changeUserEmailHandler=(event)=>{
    this.setState({useremail: event.target.value});
}

  createEmployee=(e)=>{
    e.preventDefault();
    let employee={projectname: this.state.projectname,useremail: this.state.useremail};
    console.log('employee =>'+JSON.stringify(employee)); 
    BackendService.createEmployee(employee,this.state.projectname,this.state.useremail).then(res =>{
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
        <div>
        <div className = "card col-md-4 offset-md-4 alert alert-primary" style={{marginTop:"13%"}}>                    
        <div className = "card-body alert alert-primary">
        <form>
                <Label><h6>Enter Project Name</h6></Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter Project Name"
                  value={this.state.projectname}
                  onChange={this.changeProjectNameHandler}
                />
                <Label><h6>Enter User Email ID</h6></Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter user email id"
                  value={this.state.useremail}
                  onChange={this.changeUserEmailHandler}
                />
                <br/>
              <Button variant="primary" onClick={this.createEmployee} type="submit" className="btn bg-primary btn-block mt-4">
                Add Employee
              </Button>
        </form>
        </div>
        </div>
    </div>

    </div>
    );
  }
}
export default CreateEmployeeComponent;