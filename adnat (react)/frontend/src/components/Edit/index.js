import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Edit extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'John Smith',
      name:'',
      hourlyRate:'',
      list:[]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div className="form">
        <div className="card text-left">
          <p className="mb-3">Logged in as { sessionStorage.getItem('token') } | <Link to="/">Logout</Link></p>
          <h2 className="mt-3">Edit Organizations</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" type="text" name="name" id="" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>Hourly rate ($):</label>
              <input className="form-control" type="number" name="hourlyRate" id="" value={this.state.hourlyRate} onChange={this.handleChange}/>
            </div>
            <div className="form-group mt-4 text-center">
              <Button color="primary">Update</Button>
              <Button className="ml-2" color="primary">Delete</Button>
            </div>
          </form>
        </div>
      </div> 
    )
  }
}

export default Edit;
