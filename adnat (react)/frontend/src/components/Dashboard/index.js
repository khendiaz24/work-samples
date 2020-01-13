import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'John Smith',
      name:"Bob's Burger",
    }
  }

  render(){
    return(
      <div className="form">
        <div className="card text-left">
          <p className="mb-3">Logged in as { sessionStorage.getItem('token') } | <Link to="/">Logout</Link></p>
          <h2 className="mt-3">{ this.state.name }</h2>
          <div className="mt-4 d-flex inline">
            <Link className="btn btn-primary m-2 flex-grow-1" to="/shift">View Shifts</Link>
            <Link className="btn btn-primary m-2 flex-grow-1" to="/edit">Edit</Link>
            <Link className="btn btn-primary m-2 flex-grow-1" to="/join">Leave</Link>
          </div>
        </div>
      </div> 
    )
  }
}

export default Dashboard;
