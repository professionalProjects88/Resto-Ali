import React from 'react'
import './page.css'
const Page = () => {
  return (
    <header>
        <p className='nav'>Menu</p>
        <p className='nav'>Plats Principaux</p>{/* Nos Barquettes, Nos Plats, Nos Tacos, Nos Sandwichs, Nos Burgers */}
        <p className='nav'>Specials</p>{/* Nos Tex-Mex, Pour Kids, Nos Paninis */}
        <p className='nav'>Extras</p> {/*Nos Salades, Nos Desserts et Patisseries, Nos Boissons*/}
    </header>
  )
}

export default Page
