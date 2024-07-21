import axios from 'axios';
import React from 'react';
import { useState } from 'react';

import { Link ,useNavigate} from 'react-router-dom';

function Login() {
  const navigate=useNavigate()
  const [displayerr,setdisplayerr]=useState('')
const [email,setemail]=useState('');
const [password,setPassword]=useState('');


function handelvalue(e){
   
  const {name,value}=e.target;

  if(name==='email'){
   setemail(value)
  }else{
    setPassword(value)
  }

}

const onsubmitdata = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8010/login', {
      email,
      password
    });

    console.log(response.data.user._id);
    localStorage.setItem('userinfo', response.data.user.email);
    localStorage.setItem('userinfoname', response.data.user.name);
    setdisplayerr('login succesfull')
    navigate('/home');
  } catch (error) {
    console.error('Error logging in:', error);
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Error data:', error.response.data);
      setdisplayerr('Use vaild password and email')
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error request:', error.request);
    } else {
      // Something else caused the error
      console.error('Error message:', error.message);
    }
  }
};

  return (
    <div className='fo'>
    <div className="login_form">
      <form onSubmit={onsubmitdata}>
        <h3>Login with</h3>

        <div className="login_option">
          <div className="option">
            <a href="#">
              <img src="download.png" alt="Google" />
              <span>Google</span>
            </a>
          </div>
        </div>

        <p className="separator">
          <span><i className='bx bx-grid-alt'></i></span>
        </p>

        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input name='email' onChange={handelvalue} placeholder="Enter email address" required />
        </div>

        <div className="input_box">
          <div className="password_title">
            <label htmlFor="password">Password</label>
          </div>
          <input name='password' onChange={handelvalue} placeholder="Enter your password" required />
        </div>

        <button type="submit">Log In</button>
        <p class='diplay-error'>{displayerr}</p>
        <p className="sign_up">Don't have an account? <Link to='/register'>Sign up</Link></p>
      </form>
     
    </div>
    </div>
  );
}

export default Login;
