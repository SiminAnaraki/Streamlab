import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './styles.css';
import { Scrollbar,Autoplay } from 'swiper';
import Info1 from './Info/info1';
import Info2 from './Info/info2';
import Info3 from './Info/info3';

export default function ProgressSlide() {
  return (
    <>
    <div className="container">
      <Swiper
        loop={true}
        autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        
        modules={[Scrollbar,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slideHolder">
            <img  src="assets/images/main/106426928.webp"  className="progress"/>
            <div className="progressBar1 now" id="sim1"></div>
            <div className="progressBar2" id="sim2"></div>
            <div className="progressBar3" id="sim3"></div>
            <div className='text'><Info1/></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slideHolder">
          <img  className="progress" src="assets/images/main/theshining-TO.jpg" />
          <div className="progressBar1" id="sim1"></div>
          <div className="progressBar2 now" id="sim2"></div>
          <div className="progressBar3" id="sim3"></div>
          <div className='text'><Info2/></div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slideHolder">
          <img  className="progress" src="assets/images/main/Interstellar-Photo.jpg" />
          <div className="progressBar1" id="sim1"></div>
          <div className="progressBar2" id="sim2"></div>
          <div className="progressBar3 now" id="sim3"></div>
          <div className='text'><Info3/></div>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
