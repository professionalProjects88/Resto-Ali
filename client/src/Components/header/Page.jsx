import React, { useState } from 'react';
import './page.css'; 
import { TiThMenu } from "react-icons/ti";

const Page = () => {
  const [menu, setMenu] = useState(false);
  const [nav,setNav]=useState("home");


  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleNav=(nav)=>{
    setNav(nav)
  }

  return (
    <>
      <header className={`nav-links ${menu ? 'active' : ''}`}>
      <p 
          className={`nav ${nav === 'home' ? 'active-nav' : ''}`} 
          onClick={() => handleNav('home')}
        >
          Home
        </p>
        <p 
          className={`nav ${nav === 'Plats Principaux' ? 'active-nav' : ''}`} 
          onClick={() => handleNav('Plats Principaux')}
        >
          Plats Principaux
        </p>
        <p 
          className={`nav ${nav === 'Specials' ? 'active-nav' : ''}`} 
          onClick={() => handleNav('Specials')}
        >
          Specials
        </p>
        <p 
          className={`nav ${nav === 'Extras' ? 'active-nav' : ''}`} 
          onClick={() => handleNav('Extras')}
        >
          Extras
        </p>
      </header>
      <TiThMenu size={40} className='menu-toggle' onClick={toggleMenu} />
    </>
  );
};

export default Page;

