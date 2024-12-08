import React, { useState } from 'react';
import './page.css'; 
import { TiThMenu } from "react-icons/ti";
import {useNavigate} from "react-router-dom"



const Page = () => {
  const navigate=useNavigate()
  const [menu, setMenu] = useState(false);
  const [nav,setNav]=useState("home");


  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleNav=(nav)=>{
    setNav(nav)
  }
  const handleClick=()=>{
    navigate("/")
  }

  return (
    <>
      <header className={`nav-links ${menu ? 'active' : ''}`}>
        <p 
          className={`nav ${nav === 'home' ? 'active-nav' : ''}`} 
          onClick={() => {handleNav('home');handleClick()}}
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
        <a href="/sandwiches">Sandwiches</a>
        <a href="/tacos">Tacos</a>
        <a href="/burgers">Burgers</a>
        <a href="/plats">Plats</a>
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
        <a href="/pizzas">Pizzas</a>
        <a href="/salads">Salades</a>
        <a href="/tex-mex">TexMex</a>
        
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
        <a href="/boissons">Boissons</a>
        <a href="/dessert">Desserts</a>
        </div>
        </div>
      </header>
      <TiThMenu size={40} className='menu-toggle' onClick={toggleMenu} />
    </>
  );
};

export default Page;

