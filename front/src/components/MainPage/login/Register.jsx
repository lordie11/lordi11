import React, { useState } from "react";
import Image from "./photo/image.png";
import { useHistory } from 'react-router-dom';
import GoogleSvg from "./photo/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./registre.css";
import { Link } from "react-router-dom";
import { Register } from "../../../services/LoginServices";




const Registre = () => {
    const history = useHistory();
    const [prenom,setPrenom] = useState('')
    const [nom,setNom] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPass] = useState('')
   

async function handelForm(e){
    e.preventDefault();
    const user={"firstname":prenom,"lastname":nom,"email":email,"password":password}
    await Register(user)

    history.push('/login');
    
}




  const [showPassword,setShowPassword] = useState('')

 

  return (
    <div className="register-main">
      <div className="register-left">
        <img src={Image} alt="" />
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-logo">
            <img  alt="" />
          </div>
          <div className="register-center">
            <h2>Welcome to our website!</h2>
            <p>Please enter your details</p>
            <form onSubmit={e=>handelForm(e)}>
            <input type="text" placeholder="Name" name="name" onChange={e=>setNom(e.target.value)} required={true} />
            <input type="text" placeholder="Lastname" name="lastname" onChange={e=>setPrenom(e.target.value)} required={true} />
              <input type="email" placeholder="Email" name="email" onChange={e=>setEmail(e.target.value)} required={true} />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" onChange={e=>setPass(e.target.value)} name="password" required={true} />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" required={true} />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>
              <div className="register-center-buttons">
                <button type="submit">Sign Up</button>
                <button type="submit">
                  <img src={GoogleSvg} alt="" />
                  Sign Up with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registre;