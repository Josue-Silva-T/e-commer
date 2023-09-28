import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.component.css';
import '../../Utileria/normalize.css';
import 'swiper/css';

export function Home(){
    return <div className="home">
        <div className="background">
            <img src={require('../../img/online shop.png')} alt="" />
        </div>
        <h2>Lo mas vendido</h2>
        <div className="content">
            <div className="slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <div className='slide'>
                            <img 
                                src={require('../../img/exampleGlasses(0).avif')} 
                                alt='Glasses'  
                                id="image0"/>
                            <h3>Pink Girls</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide'>
                            <img 
                                src={require('../../img/exampleGlasses(1).avif')} 
                                alt='Glasses' 
                                id="image1"/>
                            <h3>Black Rock</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide'>
                            <img 
                                src={require('../../img/exampleGlasses(2).avif')} 
                                alt='Glasses' 
                                id="image2"/>
                            <h3>Fashion Lee</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide'>
                            <img 
                                src={require('../../img/exampleGlasses(3).avif')} 
                                alt='Glasses' 
                                id="image3"/>
                            <h3>Elegant</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide'>
                            <img 
                                src={require('../../img/exampleGlasses(4).avif')} 
                                alt='Glasses' 
                                id="image4"/>
                            <h3>Bad Boy</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide'>
                            <img 
                                src={require('../../img/exampleGlasses(5).avif')} 
                                alt='Glasses' 
                                id="image5"/>
                            <h3>Flow Style</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </div>
}