import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './app/components/Home';
import Profile from './app/components/Profile';
import UserPage from './app/components/UserPage';
import ProjectManagerPage from './app/components/ProjectManagerPage';
import SignUp from './app/components/SignUp';
import AdminPage from './app/components/AdminPage';
import Login from './app/components/Login';
import './App.css';
import AppHome from './app/components/views/home';
import UpdateEmployeeComponent from './app/components/UpdateEmployeeComponent'

function App() {  
  return (
    <Router>
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
    </Switch>
  </Router>
  );
}

export default App;
