import { useState } from 'react';
import NavBar from "./Components/header/Page.jsx"
import Home from "./Components/home/Page.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
function App() {
    return (
        <>
        <NavBar/>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/*' element={<a>not found</a>}/> */}
            
            </Routes>
        </BrowserRouter>
        </>
    
    );
}

export default App;
