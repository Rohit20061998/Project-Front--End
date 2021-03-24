import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Provider } from "react-redux";
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './app/components/Profile';
import UserPage from './app/components/UserPage';
import ProjectManagerPage from './app/components/ProjectManagerPage';
import SignUp from './app/components/SignUp';
import AdminPage from './app/components/AdminPage';
import Login from './app/components/Login';
import AppHome from './app/components/views/home';
import UpdateEmployeeComponent from './app/components/UpdateEmployeeComponent';
import CreateEmployeeComponent from './app/components/CreateEmployeeComponent';
import AddTaskComponent from './app/components/AddTaskComponent';
import ProjectBoard from './app/components/kanban/components/ProjectBoard';
import AddProjectTask from './app/components/kanban/components/ProjectTask/AddProjectTask';
import UpdateProjectTask from './app/components/kanban/components/ProjectTask/UpdateProjectTask';
import Apps from './Apps';

function App() {  
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Switch>
    <Route exact={true} path="/" component={AppHome} />
    <Route exact path="/hero" component={AppHome} />
    <Route path='/profile' exact component={Profile}/>
      <Route path='/user' exact component={UserPage}/>
      <Route path='/pm' exact component={ProjectManagerPage}/>
      <Route path='/admin' exact component={AdminPage}/>
      <Route path='/Login' exact component={Login}/>
      <Route path='/signup' exact component={SignUp}/> 
      <Route path='/update-employee/:id' exact component={UpdateEmployeeComponent}/>
      <Route path='/create-employee' exact component={CreateEmployeeComponent}/>
      <Route path='/create-task' exact component={AddTaskComponent}/>
      <Route path="/profile/project-board" component={ProjectBoard}></Route>
      <Route path="/profile/addProjectTask" component={AddProjectTask} />
      <Route path="/profile/update-task/:pt_id" component={UpdateProjectTask} />
      <Route path="/Schedular" component={Apps} />
    </Switch>
    </div>
  </Router>
  </Provider>
  );
}

export default App;
