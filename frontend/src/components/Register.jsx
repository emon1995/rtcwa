import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';

const Register = () => {
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

      <div className="a-right">
        <div className="register">
          <div className="card">
            <div className="card-header">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="username">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="user name"
                    id="username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    id="password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="confirm password"
                    id="confirmPassword"
                  />
                </div>
                <div className="form-group">
                  <div className="file-image">
                    <div className="image">
                      {/* <img src={loadImage} /> */}
                    </div>
                    <div className="file">
                      <label htmlFor="image">Select Image</label>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        id="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="submit" value="register" className="btn" />
                </div>
                <div className="form-group ">
                  <span>
                    <Link to="/messenger/login">Login Your Account</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
