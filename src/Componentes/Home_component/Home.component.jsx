import React from 'react';
import lentes from '../../img/lentes.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.component.css';
import '../../Utileria/normalize.css';
import 'swiper/css'



export function Home(){
    return <div className="home">
        <div className="background">
        <h1 id="title">PRIME</h1>
        <img src={lentes} alt='Glasses' id="image"></img>
        </div>
        <div className="content">
            <div className="slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <img 
                            src={require('../../img/exampleGlasses(0).avif')} 
                            alt='Glasses'  
                            id="image0"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img 
                            src={require('../../img/exampleGlasses(1).avif')} 
                            alt='Glasses' 
                            id="image1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img 
                            src={require('../../img/exampleGlasses(2).avif')} 
                            alt='Glasses' 
                            id="image2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img 
                            src={require('../../img/exampleGlasses(3).avif')} 
                            alt='Glasses' 
                            id="image3"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img 
                            src={require('../../img/exampleGlasses(4).avif')} 
                            alt='Glasses' 
                            id="image4"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img 
                            src={require('../../img/exampleGlasses(5).avif')} 
                            alt='Glasses' 
                            id="image5"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </div>
}