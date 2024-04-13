import { useState } from 'react';

import './css/App.css';
import Header from './components/Header/header'
import About from './components/About/about'
import Skill from './components/Skill/skill';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
