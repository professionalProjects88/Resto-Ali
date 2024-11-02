import { useState } from 'react';
import './App.css';

function App() {
    return (
        <>
            <div className='welcomeContainer'>
                <p className='bienVenue'>Bienvenue au Resto Ali</p>
                <button className='startButton'>Commencez</button> {/* Added a class for potential styling */}
            </div>
        </>
    );
}

export default App;
