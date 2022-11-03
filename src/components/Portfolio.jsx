import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import contador from '../assets/contador.png'
import clima from '../assets/Proyect01.png'
import list from '../assets/ToDoList.png'
import '../style/portfolio.css'

const Portfolio = () => {
    return (
        <section className="portfolio" id='portfolio'>

            <div className="section__text">
                <h2>Proyectos</h2>
            </div>

            <Swiper
                
                style={{
                    "--swiper-navigation-color": "#26f",
                    "--swiper-pagination-color": "#26f",
                }}
                navigation={true}
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1 : 'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true, }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className='mySwiper'>
                <SwiperSlide>
                    <a href="https://cesar-ch.github.io/Contador/" target='__blank'>
                        <img src={contador} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://cesar-ch.github.io/WeatherPage/" target='__blank'>
                        <img src={clima} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://cesar-ch.github.io/To-Do-List/" target='__blank'>
                        <img src={list} alt="" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Portfolio