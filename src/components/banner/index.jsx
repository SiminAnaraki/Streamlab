import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './banner.module.css';
// import required modules
import { Autoplay, Navigation } from 'swiper';

export default function Banner() {
  
  return (
    <>
    <div className={styles.banner}>
      <Swiper
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[ Navigation]}
        
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.layer}>
            <img src="/assets/images/main/asset-1.jpeg"/>
            <div className={styles.flexHolder}>
              <div className={styles.leftMotion}>                  
                <span className={styles.red}>|</span>
                <span className={styles.title}>Most Viewed</span>
                <h1 className={styles.movieName}>King of Skull</h1>
                <div className={styles.rate}>
                  <p>Streamlab is a long established fact that a reader will be distracted
                  by the readable content of a page The point of using Lorem Streamlab.
                  </p>
                  <ul>
                    <li>
                      <strong>Cast:</strong>
                      <span>Anna Romanson,Robert Romanson</span>
                    </li>
                    <li>
                    <strong></strong>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className={styles.rightMotion}>
                <img src="/assets/images/main/asset-1.jpeg"/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.layer}>
            <img src="/assets/images/main/asset-3.jpeg"/>      
            <div className="container">
              <div className={styles.flexHolder}>
              <span className={styles.red}>|</span>
              <span className={styles.title}>Most Viewed</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.layer}>
            <img src="/assets/images/main/asset-4.jpeg"/>
          </div>
          <div className="container">
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}






