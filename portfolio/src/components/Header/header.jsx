import { useState } from 'react';

import '../../components/Header/header.css';

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='header'>
        <div className='left'>
          <p>Portfolio</p>
        </div>
        <div className='right'>
          <ul>
            <li><a href="#about">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1z2EPzW_8ND0UP0FSSyJgqSksN5df4han/view" target="_blank" download="VijayResume.pdf"> DownloadCV</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

