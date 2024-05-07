import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header/header';
import About from './components/About/about';
import Skill from './components/Skill/skill';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Achievement from './components/Achievements/achievement';
import ProjDetail from './components/Extras/projdetail';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<div>
          <Header />
          <About />
          <Skill />
          <Project />
          <Achievement />
          <Contact />
         
        </div>} />
        <Route path="/projdetail" element={<ProjDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
