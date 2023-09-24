import React from 'react';
import lentes from '../../img/lentes.webp';
import './Home.component.css';



export function Home(){
    return <div className="home">
        <h1 id="title">PRIME</h1>
        <img src={lentes} alt='Glasses' id="background"></img>
    </div>
}