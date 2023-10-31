import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules'; 

export default function ThumbsSlide(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  function renderFarm(){
    return (
        props.info?.map((movie)=> {
            const { poster , id , title  } = movie
            return (
              <SwiperSlide key={id}>
                <li className='special'>  
                <Link to = {`/Movies/${id}`}>
                    <div className="picHolder">
                      <img className="pic" src={poster}  alt={title}/>
                    </div>
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
        spaceBetween={60}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
          600: {
          slidesPerView: 2,
          spaceBetween: 80,
      },
          // When window width is >= 768px
          768: {
              slidesPerView: 3,
              spaceBetween: 50,
          },
          // When window width is >= 1024px
          1024: {
              slidesPerView: 4,
              spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween:60,
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
