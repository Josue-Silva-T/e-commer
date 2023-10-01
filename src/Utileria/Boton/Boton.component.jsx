import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import './Boton.component.css';

export function Boton({ valorBoton, accion }) {
    const divAnimacionOjo = useRef(null);
    const divAnimacionPupila = useRef(null);

    let tl = gsap.timeline();

    const iniciarPupila = () => {
        if (tl.isActive()) {
            tl.kill(divAnimacionPupila);
            tl.kill(divAnimacionOjo);
        }
        const anchoOjo = (divAnimacionOjo.current.getBoundingClientRect().width * 0.47);
        const alturaOjo = (divAnimacionOjo.current.getBoundingClientRect().height * 0.1);

        gsap.from(divAnimacionPupila.current, {
            x: anchoOjo,
            y: 0
        });

        gsap.to(divAnimacionOjo.current, {
            top: 0,
            height: "100%",
            duration: 0.5
        })

    }

    const mouseEnBoton = (e) => {

        divAnimacionOjo.current.classList.add('seleccionado')
        divAnimacionPupila.current.classList.add('cursor')

        const coordenadaYOjo = divAnimacionOjo.current.getBoundingClientRect().top;
        const coordenadaXPupila = divAnimacionPupila.current.getBoundingClientRect().width / 4;


        const coordenadaXMouse = e.clientX;
        const coordenadaYMouse = e.clientY;

        const coordenadaXRelativa = coordenadaXMouse - coordenadaXPupila;
        const coordenadaYRelativa = coordenadaYMouse - coordenadaYOjo;

        gsap.to(divAnimacionPupila.current, {
            x: coordenadaXRelativa,
            y: coordenadaYRelativa
        });




    }

    const mouseFueraBoton = () => {
        const anchoOjo = (divAnimacionOjo.current.getBoundingClientRect().width * 0.47);
        const alturaOjo = (divAnimacionOjo.current.getBoundingClientRect().height * 0.1);

        tl.startTime(2);

        tl.to(divAnimacionPupila.current, {
            x: anchoOjo,
            y: alturaOjo
        });

        tl.to(divAnimacionOjo.current, {
            top: "50%",
            height: 0,
            duration: 0.5,
            delay: 0
        })

        tl.to(divAnimacionPupila.current, {
            duration: 0.5,
            delay: 0
        })

    }





    return (
        <button
            className="default"
            onMouseEnter={iniciarPupila}
            onMouseMove={mouseEnBoton}
            onMouseLeave={mouseFueraBoton}
            onClick={accion}
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