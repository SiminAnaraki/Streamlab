import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from "../TVShows/TVShows.module.css"

export default function TVShows() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getApi(currentPage);
  }, [currentPage]);

  function getApi(page) {
    axios.get("https://moviesapi.ir/api/v1/movies", { params: { page: page } })
      .then(function (response) {
        const newMovies = response.data.data;
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const loadMoreMovies = () => {
    setCurrentPage(currentPage + 1);
  };

  function renderFarm(){
    return movies.map((movie) => {
      const { poster, title, id,genres } = movie;
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
      );
    })}
  return (
    <div className={styles.movies}>
      <div className="container">
        <ul className={styles.filmList}>
          {renderFarm()}
        </ul>
        <button onClick={loadMoreMovies}>Load More</button>
      </div>
    </div>
  );
}

