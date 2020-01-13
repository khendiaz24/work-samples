import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Join extends Component {
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

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/comments?postId=1')
    .then(res => {
      const list = res.data;
      this.setState({list});
      console.log(list);
    })
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
          <p>You aren't a member of any organizations.</p>
          <p>Join as existing one or create a new one.</p>
          <h2 className="mt-3">Organizations</h2>
          <ul>
            {this.state.list.map(lists => <li key={lists.id}><span>{lists.name}</span> <Link to="/edit">Edit</Link><i> | </i><Link to="/dashboard">Join</Link></li>)}
          </ul>
          <h2 className="mt-3">Create Organizations</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" type="text" name="name" id="" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>Hourly rate ($):</label>
              <input className="form-control" type="number" name="hourlyRate" id="" value={this.state.hourlyRate} onChange={this.handleChange}/>
            </div>
            <div className="form-group mt-4">
              <Link className="btn btn-primary" to="/dashboard">Create and Join</Link>
            </div>
          </form>
        </div>
      </div> 
    )
  }
}

export default Join;
