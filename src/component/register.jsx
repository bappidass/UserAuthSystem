import React, { useState } from 'react';
import '../cssfile/register.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [displayerr,setdisplayerr]=useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleValue(e) {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else {
      setPassword(value);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8010/register', {
        name,
        email,
        password,
      });

      console.log(response.data);
      if (response.status === 201) {
        navigate('/login');
        setdisplayerr('account creation succesfull')
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response) {
     
        console.error('Error data:', error.response.data);
        console.log(error.response.data)
        setdisplayerr('account alraedy exist')
      } else if (error.request) {
        
        console.error('Error request:', error.request);
      } else {
       
        console.error('General error message:', error.message);
      }
    }
  };
  


  return (
    <div className='fo'>
    <div className="login_form">
      <form onSubmit={onSubmit}>
        <h3>Register with</h3>

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
          <label htmlFor="name">Name</label>
          <input name='name' onChange={handleValue} value={name} placeholder="Enter Your Name" required />
        </div>
        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input name='email' onChange={handleValue} value={email} placeholder="Enter email address" required />
        </div>
        <div className="input_box">
          <label htmlFor="password">Password</label>
          <input name='password' onChange={handleValue} value={password} placeholder="Enter Your Password" required />
        </div>

        <button type="submit">SIGNUP</button>
        <p class='diplay-error'>{displayerr}</p>
        <p className="sign_up">Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
    </div>
  );
}

export default Register;

