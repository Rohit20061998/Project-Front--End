import AppNavbar from './AppNavbar';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Alert } from "reactstrap";
import BackendService from '../services/BackendService';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      content: "",
      error: "",
      employees:[],
      roles:[]
    }

    this.editEmployee=this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    BackendService.getAdminBoard()
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

      BackendService.getEmployees().then((res)=>{
        this.setState({employees:res.data});
  });

  BackendService.getRoles().then((res)=>{
    this.setState({roles:res.data});
});

    }

   deleteEmployee(id){
       BackendService.deleteEmployee(id).then( res => {
           this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
       });
   }

   editEmployee(id){
         this.props.history.push(`/update-employee/${id}`);
   }


   /*viewEmployee(id){
       this.props.history.push(`/view-employee/${id}`);
   }*/

  render() {
    return (
      <div>
      <div>
        <AppNavbar/>
        <Container fluid>
          {
            this.state.content ? (
              <div style={{marginTop: "20px"}}>
                <Alert variant="info">
                  <h2>{this.state.content}</h2>
                </Alert>
              </div>
            ) : (
              <div style={{marginTop: "20px"}}>
                <Alert variant="danger">
                  {this.state.error}
                </Alert>
              </div>
            )
          }
        </Container>
      </div>
      <div>
      <h2 className="test-center">Employee List</h2>
      <div className="row">
          <table className="table table-striped table-bordered">
           
            <thead>
                <tr>
                    <td>Employee Id</td>
                    <td>Employee First Name</td>
                    <td>Employee Last Name</td>
                    <td>Employee Mobile No</td>
                    <td>Employee email Id</td>
                    <td>Employee Role</td>
                    <th>Actions</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    this.state.employees.map(
                        employee =>
                        <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstname}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.mobileno}</td>
                        <td>{employee.email}</td>                    
                        <td>{employee.role.name}</td>
                        <td>
                            <button onClick={() =>this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
          </table>
      </div>
   </div>
   </div>
);
}
}
export default AdminPage;