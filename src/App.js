import React from 'react';

import { Routes, Route } from "react-router-dom"


import './App.css';
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from './components/Footer.js';
import AboutMe from './components/AboutMe.js';
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="AboutMe" element={ <AboutMe/> } />
          <Route path="Contact" element={ <Contact /> } />
          <Route path="Resume" element={ <Resume/> } />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
