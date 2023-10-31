import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import  styles from './slideMovies.module.css';
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


export default function SlideMovies(props) {
    function renderFarm(){
        return (
            props.info?.map((movie)=> {
                const { poster , id , title , genres ,images=[]} = movie
                return (
                    
                    <SwiperSlide>
                        <li key={id}>
                            <Link to = {`/Movies/${id}`}>
                                <div className={styles.picHolder}>
                                    <img className={styles.pic} src={poster} />
                                    <div className={styles.play}> <i class="fa-solid fa-play"></i></div>
                                    <div className={styles.icons}>
                                        <div className={styles.plus}><i class="fa-solid fa-plus"></i></div>
                                        <div className={styles.share}>
                                            <i class="fa-solid fa-share-nodes"></i>
                                            <div className={styles.box}>
                                                <i class="fa-brands fa-twitter"></i>
                                                <i class="fa-brands fa-instagram"></i>
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </div>
                                        </div>
                                        <div className={styles.heart}><i class="fa-regular fa-heart"></i></div>
                                    </div>
                                </div>
                                <p className={styles.movieTitle}>{title}</p>
                                <h6>{genres}</h6>
                            </Link>
                            </li>
                    </SwiperSlide>
                )
            }
        )
    )}

  return (
    <>
        <div className={styles.slideMovies}>
            <div >
                <div className={styles.titr}>
                    <h4>{props.title}</h4>
                    <Link to={props.link}><p>{props.more}</p></Link>
                </div>
                <ul>
                    <Swiper
                        style={{"--swiper-navigation-size":"25px",
                        '--swiper-navigation-color': '#fff',
                        '--swiper-navigation-weight': '500',
                        'padding-left':'55px',
                        'padding-right':'55px',
                      }}
                        slidesPerView={5}
                        spaceBetween={70}
                        loop={true}
                        navigation={{
                        clickable: true,
                        }}
                        breakpoints={{
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 35,
                            },
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 80,
                            },
                            // When window width is >= 768px
                            800: {
                                slidesPerView: 3,
                                spaceBetween:70,
                            },
                            900: {
                                slidesPerView: 3,
                                spaceBetween: 85,
                            },
                            // When window width is >= 1024px
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 60,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 85,
                            },
                            1400: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                            1500: {
                                slidesPerView: 5,
                                spaceBetween: 60,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                    
                        {renderFarm()}
                        
                    </Swiper>
                </ul>
            </div>
      </div>
    </>
  );
}
