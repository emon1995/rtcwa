import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';

const Login = () => {
  return (
    <div className="Auth">
      {/* left side */}

      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>RTCWA</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right form side */}
    <div className="login">
    <div className="card">
        <div className="card-header">
            <h3>Login</h3>
        </div>
        <div className="card-body">
            <form >
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="email"  name="email" id="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="password" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="btn" />
                </div>
                <div className="form-group">
                    <span><Link to="/messenger/register">Register Your Account</Link></span>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
  )
}

export default Login