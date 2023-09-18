import React from 'react';
import './Home.css';
import lentes from './img/lentes.png';

export function Home(){
    return <div className="home">
        <h1>PRIME</h1>
        <img src={lentes} alt='Glasses'></img>
    </div>
}