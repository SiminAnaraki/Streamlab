import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import styles from "../movies/movies.module.css"

export default function Movies(){
    const [movies,setMovies] = useState({metadata:{curent_page:"1"}})
    useEffect( ()=>{
        getApi();
    } , [] )
    function getApi(page=1){
        axios.get("https://moviesapi.ir/api/v1/movies",{params:{page:page}})
        .then(function (response) {
        setMovies(response.data);
    })}
    function changePage(page){
      getApi(page)
    }

    function renderFarm(){
      return movies.data?.map((movie) => {
        const {poster,title,id,genres} = movie
        return (
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
        )}
    )}
    return (
      <div className={styles.movies}>
        <div className="container">
          <div>
          <ul className={styles.filmList}>
            {renderFarm()}
          </ul>
          </div>
          <br></br>
          <br></br>
          <div className={styles.pagination}>
          <Pagination size="large" defaultCurrent={movies.metadata.current_page} total={movies.metadata.total_count}  onChange={changePage}/>
          </div>
        </div>
      </div>

    )}
 
    
