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
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">DownloadCV</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
