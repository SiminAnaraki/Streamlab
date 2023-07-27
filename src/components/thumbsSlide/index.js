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
            const { poster , id , title , genres } = movie
            return (
              <SwiperSlide>
                <li key={id} className='special'>  
                  <img className="pic" src={poster} />
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
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={-20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <ul>
          {renderFarm()}
          </ul>
      </Swiper>
   </div>
  );
}
