import { useState } from 'react';

import './css/App.css';
import Header from './components/Header/header'
import About from './components/About/about'



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <About/>
    </>
  );
}

export default App;
