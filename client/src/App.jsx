import { useState } from 'react';
import NavBar from "./Components/header/Page.jsx"
import Home from "./Components/home/Page.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sandwiches from "./Components/sandwiches/Page.jsx"
import Tacos from "./Components/tacos/Page.jsx"
import Burgers from "./Components/burgers/Page.jsx"
import Plats from "./Components/plates/Page.jsx"
import Pizzas from "./Components/pizzas/Page.jsx"
import Salads from "./Components/salads/Page.jsx"
import TexMex from "./Components/texmex/Page.jsx"
import Boisson from "./Components/boissons/Page.jsx"
import Dessert from "./Components/dessert/Page.jsx"
import "./App.css"
function App() {

  

    return (
        <>
        <BrowserRouter>
        <NavBar/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/sandwiches" element={<Sandwiches/>}/>
            <Route path="/tacos" element={<Tacos/>}/>
            <Route path="/burgers" element={<Burgers/>}/>
            <Route path="/plats" element={<Plats/>}/>
            <Route path="/pizzas" element={<Pizzas/>}/>
            <Route path="/salads" element={<Salads/>}/>
            <Route path="/tex-mex" element={<TexMex/>}/>
            <Route path="/boissons" element={<Boisson/>}/>
            <Route path="/dessert" element={<Dessert/>}/>
            {/* <Route path='/*' element={<a>not found</a>}/> */}
            </Routes>
        </BrowserRouter>
        </>
    
    );
}

export default App;
