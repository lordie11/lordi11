import React, { useState} from "react";
import { useHistory } from 'react-router-dom';

import { FaEye } from "react-icons/fa6";
import Image from "./photo/image.png";
import GoogleSvg from "./photo/icons8-google.svg";

import { FaEyeSlash } from "react-icons/fa6";
import "./login.css";
import { Link } from "react-router-dom";
import { logIn } from "../../../services/LoginServices";


const Login = () => {
  const history = useHistory();
   const [email,setEmail] = useState('')
    const [password,setPass] = useState('')
   

async function handelForm(e){
    e.preventDefault();
    const user={"email":email,"password":password}
    const rep = await logIn(user)
    const token = rep.data
    localStorage.setItem("jwtToken",token)
    history.push('/list');

}
  
 const [showPassword,setShowPassword]=useState('')

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img  alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={e=>handelForm(e)}>
              <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} name="email" />
              <div className="pass-input-div">
                <input
                onChange={e=>setPass(e.target.value)}
                  type='text'
                  placeholder="Password"
                  name="password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
                <button type="submit">
                  <img src={GoogleSvg}  alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/registre">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
