import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import  styles from './slideMovies.module.css';
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function SlideMovies(props) {
    function renderFarm(){
        return (
            props.info.map((movie)=> {
                const { poster , id , title , genres } = movie
                return (
                    <SwiperSlide>
                        <li key={id}>
                            <Link to = {`/Movies/${id}`}>
                                <img className={styles.pic} src={poster} />
                                <p className="movieTitle">{title}</p>
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
            <div className="container">
                <div className={styles.titr}>
                    <h4>{props.title}</h4>
                    <Link to={props.link}><p>{props.more}</p></Link>
                </div>
                <ul>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={80}
                        navigation={{
                        clickable: true,
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
