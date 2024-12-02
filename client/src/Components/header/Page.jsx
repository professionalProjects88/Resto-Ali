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
        <div className='dropdown'>
        <p 
          className={`nav ${nav === 'Plats Principaux' ? 'active-nav' : ''}`} 
          onClick={() => handleNav('Plats Principaux')}
        >
          Plats Principaux
        </p>
        <div className='dropdown-content1'>
        <a href="#">Sandwiche</a>
        <a href="#">Taco</a>
        <a href="#">Burger</a>
        <a href="#">Plat</a>
        </div>
        </div>
        <div className='dropdown'>
          
        <p 
          className={`nav ${nav === 'Specials' ? 'active-nav' : ''}`} 
          onClick={() => handleNav('Specials')}
        >
          Specials
        </p>
        <div className='dropdown-content2'>
        <a href="#">Pizza</a>
        <a href="#">Salade</a>
        <a href="#">TexMex</a>
        
        </div>
        </div>
        <div className='dropdown'>

        <p 
          className={`nav ${nav === 'Extras' ? 'active-nav' : ''}`} 
          onClick={() => handleNav('Extras')}
        >
          Extras
        </p>
        <div className='dropdown-content3'>
        <a href="#">Boisson</a>
        <a href="#">Dessert</a>
        
        </div>
        </div>
      </header>
      <TiThMenu size={40} className='menu-toggle' onClick={toggleMenu} />
    </>
  );
};

export default Page;

