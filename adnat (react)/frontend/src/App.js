import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Join from './components/Dashboard/join.js';
import Dashboard from './components/Dashboard';
import Edit from './components/Edit';
import Shift from './components/Shift';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App h-100">
      <Router>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/join" component={Join}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/edit" component={Edit}/>
        <Route path="/shift" component={Shift}/>
      </Router>
    </div>
  );
}

export default App;
