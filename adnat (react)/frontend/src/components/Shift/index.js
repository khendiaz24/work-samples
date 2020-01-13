import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Shift extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'John Smith',
      name:"Bob's Burger",
      shift:[],
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const shift = res.data;
      this.setState({shift});
      console.log(shift);
    })
  }

  render() {
    return (
      <div className="form lg">
        <div className="card text-left">
          <p className="mb-3">Logged in as { sessionStorage.getItem('token') } | <Link to="/">Logout</Link></p>
          <h2 className="mt-3">{ this.state.name }</h2>
          <h3 className="mt-3">Shifts</h3>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Employee name</th>
                <th>Shift date</th>
                <th>Start time</th>
                <th>Finish time</th>
                <th>Break length (minutes)</th>
                <th>Hours worked</th>
                <th>Shift cost</th>
              </tr>
            </thead>
            <tbody>
              {this.state.shift.map(shifts => 
              <tr key={ shifts.id }>
                <td>{ shifts.name }</td>
                <td>{ shifts.username }</td>
                <td>{ shifts.email }</td>
                <td>{ shifts.name }</td>
                <td>{ shifts.username }</td>
                <td>{ shifts.email }</td>
                <td>{ shifts.name }</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div> 
    )
  }
}

export default Shift;

