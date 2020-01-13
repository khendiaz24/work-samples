import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email:'',
      password:'',
      passwordConfirmation:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    alert(this.state.name)
  }

  render() {
    return (
      <div className="form">
        <div className="card">
          <h1 className="mb-4">Sign up</h1>  
          <form>
          <div className="form-group">
              <label>Name</label>
              <input className="form-control" type="text" name="name" id="" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="email" name="email" id="" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>Password <small>(6 characters minimum)</small></label>
              <input className="form-control" type="password" name="password" id="" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>Password confirmation</label>
              <input className="form-control" type="password" name="conpassword" id="" value={this.state.conpassword} onChange={this.handleChange}/>
            </div>
            <div className="form-group mt-4">
              <Button onClick={this.handleSubmit} color="primary">Sign up</Button>
            </div>
            <div className="form-group mt-4 mb-0">
              <p className="mb-0">
                <Link to='/'><small>Log in</small></Link>
              </p>
            </div>
          </form>
        </div>
      </div> 
    )
  }
}

export default Signup;