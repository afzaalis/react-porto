import React from 'react';
import '../App.css'; // Import the CSS file for styling
import { FaLinkedin, FaInstagram, FaSpotify, FaGithub } from 'react-icons/fa';
import './ConnectWithMe.css'; // Create this CSS file for styling

export default function ProfilePage() {
  return (
    <section className='profile-page'>
      <div className="profile-content">
        <h1 className="profile-title">HELLO BO</h1>
        <p className="profile-description">
          I am a student of software engineering at Telkom University.
          Hello! I am Afzaal Isnaufal, an enthusiastic and dedicated software engineering
          student with a passion for learning and developing innovative solutions. My journey
          in software engineering began with a curiosity for how technology works and a desire
          to create impactful applications. I am constantly exploring new technologies and
          methodologies to enhance my skills and stay updated with industry trends.
          <span> <div className="connect-with-me">
      <h2 >Connect with Me</h2>
      <div className="icons">
        <a href="https://www.linkedin.com/in/afzaal-isnaufal-4a1753248/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/afzaalis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://open.spotify.com/user/31zcjdryaf446j5uttcymdganyam?si=55342a2d121e4e02" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
          <FaSpotify />
        </a>
        <a href="https://github.com/afzaalis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
    </div></span>
        </p>
        <a href="#1">
        <button className="glow-on-hover" type="button">
              My Work Here
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-arrow-right" 
                viewBox="0 0 16 16" 
                style={{ marginLeft: '8px' }}>
              <path fillRule="evenodd" 
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
           </svg>
      </button>
      </a>
      </div>
      <div className="profile-image">
        <img src="/img/asli.jpeg" alt="Profile" />
      </div>
     
    </section>
  );
}
