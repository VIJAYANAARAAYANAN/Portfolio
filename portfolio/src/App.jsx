import { useState } from 'react';

import './css/App.css';
import Header from './components/Header/header'
import About from './components/About/about'
import Skill from './components/Skill/skill';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Achievement from './components/Achievements/achievement';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <div id = "about">
        <About/>
      </div>
      <Skill/>
      <Achievement/>
      <div id = "project">
        <Project/>
      </div>
      
      <div id="contact">
      <Contact/>  
      </div>
  
      
    </>
  );
}

export default App;
