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
import BannerInfo1 from './bannerInfo/info1';
import BannerInfo2 from './bannerInfo/info2';
import BannerInfo3 from './bannerInfo/info3';

export default function Banner() {
  
  return (
    <>
      <Swiper
        style={{"--swiper-navigation-size":"25px",
                '--swiper-navigation-color': '#fff',
                '--swiper-navigation-weight': '500',
              }}
        loop={true}
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
        modules={[ Navigation,Autoplay]}
        
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.layer}>
            <img  className={styles.mainPic} src="/assets/images/main/Feature+3-1.png"/>
            <div className={styles.flexHolder}>
              <div className={styles.leftMotion}>                  
                <span className={styles.red}>|</span>
                <span className={styles.title}>Most Viewed</span>
                <BannerInfo1/>
                </div>
              <div className={styles.rightMotion}>
                <img src="/assets/images/main/Feature+3-1.png"/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.layer}>
            <img  className={styles.mainPic} src="/assets/images/main/b990953c9609c23ec6d91d893f42620e.png"/>
            <div className={styles.flexHolder}>
              <div className={styles.leftMotion}>                  
                <span className={styles.red}>|</span>
                <span className={styles.title}>Most Viewed</span>
                <BannerInfo2/>
                </div>
              <div className={styles.rightMotion}>
                <img src="/assets/images/main/b990953c9609c23ec6d91d893f42620e.png"/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.layer}>
            <img  className={styles.mainPic} src="/assets/images/main/pianist.jpg"/>
            <div className={styles.flexHolder}>
              <div className={styles.leftMotion}>                  
                <span className={styles.red}>|</span>
                <span className={styles.title}>Most Viewed</span>
                <BannerInfo3/>
                </div>
              <div className={styles.rightMotion}>
                <img src="/assets/images/main/pianist.jpg"/>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </>
  );
}






