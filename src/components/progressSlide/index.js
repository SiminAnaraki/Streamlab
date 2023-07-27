import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './styles.css';
import { Scrollbar,Autoplay } from 'swiper';

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
        // scrollbar={{
        //   hide: false,
        //   width:50,
        // }}
        modules={[Scrollbar,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slideHolder">
            <img  src="assets/images/main/asset-20.jpeg"  className="progress"/>
            <div className="progressBar1 now" id="sim1"></div>
            <div className="progressBar2" id="sim2"></div>
            <div className="progressBar3" id="sim3"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slideHolder">
          <img  className="progress" src="assets/images/main/asset-21.jpeg" />
          <div className="progressBar1" id="sim1"></div>
          <div className="progressBar2 now" id="sim2"></div>
          <div className="progressBar3" id="sim3"></div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slideHolder">
          <img  className="progress" src="assets/images/main/asset-37.jpeg" />
          <div className="progressBar1" id="sim1"></div>
          <div className="progressBar2" id="sim2"></div>
          <div className="progressBar3 now" id="sim3"></div>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
