import React from 'react';
import lentes from '../../img/lentes.webp';
import './Home.component.css';



export function Home(){
    return <div className="home">
        <h1>PRIME</h1>
        <img src={lentes} alt='Glasses'></img>
    </div>
}