import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./TrackSlider.css"
import slide_image_1 from '../../../assets/roboticss.jpg';
import slide_image_2 from'../../../assets/ai.jpg';
import slide_image_4 from '../../../assets/BioTech.png';
import slide_image_3 from'../../../assets/climate.png';
import slide_image_5 from '../../../assets/dual.jpg';
import slide_image_6 from '../../../assets/vrai.jpg';
import slide_image_7 from '../../../assets/CyberSecurity.jpeg';
import Aos from "aos"
import "aos/dist/aos.css"
export default function TrackSlider() {
useEffect(()=> {
              Aos.init({duration: 2000});
          })
  return (
    <div className="container" >
    <h2 className="whatweofferheadings" >TRACKS</h2>
    <Swiper
    z
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
      data-aos="fade-right"
     
    >
      <SwiperSlide  className='image-1'>
        <h1 className='swiper-heading'>AI and Big Data</h1>
        <img src={slide_image_2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide className='image-1'>
        <h1 className='swiper-heading'>Robotics &amp; Autonomous Systems</h1>
        <img src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1 className='swiper-heading'>Climate Tech</h1>
        <img src={slide_image_3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1 className='swiper-heading'>Bio Technology / Bio Informatics</h1>
        <img src={slide_image_4} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1 className='swiper-heading'>Dual Use</h1>
        <img src={slide_image_5} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1 className='swiper-heading'>Simulation / AR &amp; VR</h1>
        <img src={slide_image_6} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1 className='swiper-heading'>Cyber Security</h1>
        <img src={slide_image_7} alt="slide_image" />
      </SwiperSlide>
 

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}