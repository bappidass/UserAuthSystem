import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssfile/profile.css';

function Home() {
  const [email, setEmail] = useState(localStorage.getItem('userinfo'));
  const [name, setName] = useState(localStorage.getItem('userinfoname'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userinfo');
    localStorage.removeItem('userinfoname');
    navigate('/login');
  };

  return (
    <div className="mm">
      <div className="NAV">
        <button className="primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="card-container">
        <span className="pro">PRO</span>
        <img className="round" src="default_profile.png" alt="user" />
        <h3>{name}</h3>
        <h6>{email}</h6>
        <p>User interface designer and <br /> front-end developer</p>
        <div className="buttons">
          <button className="primary">
            Message
          </button>
          <button className="primary ghost">
            Following
          </button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
