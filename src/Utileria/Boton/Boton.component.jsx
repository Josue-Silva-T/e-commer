import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import './Boton.component.css';

export function Boton({ valorBoton }) {
    const divAnimacionOjo = useRef(null);
    const divAnimacionPupila = useRef(null);

    let tl = gsap.timeline();

    const iniciarPupila = (e) => {
        if(tl.isActive()) {
            tl.kill(divAnimacionPupila);
        }
        const anchoOjo = (divAnimacionOjo.current.getBoundingClientRect().width * 51) / 100;
        const alturaOjo = (divAnimacionOjo.current.getBoundingClientRect().height * 30) / 100;

        tl.from(divAnimacionPupila.current, {
            x: anchoOjo,
            y: alturaOjo
        });

    }

    const mouseEnBoton = (e) => {

        divAnimacionOjo.current.classList.add('seleccionado')
        divAnimacionPupila.current.classList.add('cursor')

        const coordenadaYOjo = divAnimacionOjo.current.getBoundingClientRect().top;


        const coordenadaXMouse = e.clientX;
        const coordenadaYMouse = e.clientY;

        const coordenadaXRelativa = coordenadaXMouse;
        const coordenadaYRelativa = coordenadaYMouse - coordenadaYOjo;
        
        gsap.to(divAnimacionPupila.current, {
            x: coordenadaXRelativa,
            y: coordenadaYRelativa
        });

        gsap.to(divAnimacionOjo.current, {
            top: 0,
            height: "100%",
            duration: 0.5
        })

    }

    const mouseFueraBoton = () => {
        const anchoOjo = (divAnimacionOjo.current.getBoundingClientRect().width * 51) / 100;
        const alturaOjo = (divAnimacionOjo.current.getBoundingClientRect().height * 30) / 100;


        gsap.to(divAnimacionPupila.current, {
            x: anchoOjo,
            y: alturaOjo
        });

        gsap.to(divAnimacionOjo.current, {
            top : "50%",
            height: 0,
            duration: 0.5
        })

        setTimeout(() => {
            divAnimacionOjo.current.classList.remove('seleccionado');
            divAnimacionPupila.current.classList.remove('cursor');
        }, 1000);

    }





    return (
        <button
            className="default"
            onMouseEnter={iniciarPupila}
            onMouseMove={mouseEnBoton}
            onMouseLeave={mouseFueraBoton}
            
        >
            {valorBoton}
            <div ref={divAnimacionOjo}>
                <div
                    ref={divAnimacionPupila}
                >
                </div>
            </div>
        </button>
    );
}