import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import './styles.css';

// import required modules
import { Pagination } from 'swiper'; 

export default function ThumbsSlide(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  function renderFarm(){
    return (
        props.info?.map((movie)=> {
            const { poster , id , title  } = movie
            return (
              <SwiperSlide>
                <li key={id} className='special'>  
                  <div className="picHolder">
                    <img className="pic" src={poster} />
                  </div>
                  <Link to = {`/Movies/${id}`}>
                    <p className="movieTitle">{title}</p>
                  </Link>
                  </li>
              </SwiperSlide>
      )
  }
)
)}
  return (
    <div className="container">
      <ul>
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={-20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: -20,
        },
          600: {
            slidesPerView: 1,
            spaceBetween: -20,
        },
          // When window width is >= 768px
          768: {
              slidesPerView: 2,
              spaceBetween: -20,
          },
          // When window width is >= 1024px
          1024: {
              slidesPerView: 4,
              spaceBetween: -20,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: -20,
        },
      }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {renderFarm()}
      </Swiper>
      </ul>
   </div>
  );
}
