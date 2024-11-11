import React, { useState } from 'react';
import './page.css'; 
import { TiThMenu } from "react-icons/ti";

const Page = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className={`nav-links ${menu ? 'active' : ''}`}>
        <p className='nav'>Menu</p>
        <p className='nav'>Plats Principaux</p>
        <p className='nav'>Specials</p>
        <p className='nav'>Extras</p>
      </header>
      <TiThMenu size={40} className='menu-toggle' onClick={toggleMenu} />
    </>
  );
};

export default Page;

