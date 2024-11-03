import { useState } from 'react';
import Logo from "./Components/logo/Page.jsx"
import NavBar from "./Components/header/Page.jsx"
import "./App.css"
function App() {
    return (
    <div className='headerContainer'>
        <Logo/>
        <NavBar/>
    </div>
    );
}

export default App;
