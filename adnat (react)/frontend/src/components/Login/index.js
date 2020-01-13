import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSumbit(e) {
    sessionStorage.setItem('token', this.state.email);
  }

  render() {
    return (
    <div className="form">
      <div className="card">
        <h1 className="mb-4">Log in</h1>  
        <form>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" name="email" id="" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" name="password" id="" value={this.state.password} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>
            <input type="checkbox" name="" id="" value=""/> <small>Remember me</small>
            </label>
          </div>
          <div className="form-group mt-4">
            <Link className="btn btn-primary" to="/join" onClick={this.handleSumbit}>Log in</Link>
          </div>
          <div className="form-group mt-4 mb-0">
            <p className="mb-0">
              <Link to='/signup'><small>Sign up</small></Link>
            </p>
            <p className="mb-0">
              <Link to='#'><small>Forgot your password?</small></Link>
            </p>
          </div>
        </form>
      </div>
    </div> 
    )
  }
}

export default Login;
