// src/App.js
import React, { useEffect } from 'react';
import ParticlesComponent from './components/particles'; 
import { Navbar } from './components/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ProfilePage from './components/ProfilePage'
import { Education } from './components/Education';
import {PreLoader} from './components/PreLoader';
import { preLoaderAnim } from './animations';
import {MyWork,BannerCards} from './components/Card'
import {BackToTop} from './components/BackToTop'

const App = () => {
  
  useEffect (() => {
    preLoaderAnim()
  },[]);

  return (
    <>
    <PreLoader/>
    <div className="App">
      <ParticlesComponent className="particles" />
        <div className="main-wrapper">
          <Navbar />
           <ProfilePage/>
           <hr />
           <a href="#my-work">
        </a>
           <Education/>
           <BannerCards/>
            <MyWork/>
            <BackToTop/>
      </div>
    </div>
    </>
  );
};



export default App;
