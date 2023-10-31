import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../banner.module.css";
import { Link } from "react-router-dom";

export default function BannerInfo1(){
    const [info,setInfo] = useState([]);
    const id ="14"
    
    useEffect( ()=>{
        getInfo()
    },[])
    function getInfo(){
        axios.get(`https://moviesapi.ir/api/v1/movies/${id}`)
        .then(function (response) {
          setInfo(response.data);
        }
          )}

        const {title,country,imdb_rating,actors,poster,plot,genres,awards,type} = info;
    return (
        <>
            <h1>{title}</h1>
            <div className={styles.flexHolder2}>
                <span className={styles.country}>{type}</span>
                <img src="/assets/images/asset-2.png"/>
                <span className={styles.imdb}>{imdb_rating}</span>
            </div>
            <p className={`${styles.plot} ${styles.plot1}`}>{plot}</p>
            <p className={styles.data}><span>Cast:</span>{actors}</p>
            <p className={styles.data}><span>Genre:</span>{genres}</p>
            <p className={styles.data}><span>Awards:</span>{awards}</p>
            <Link to="/Movies/14">
                <button className={styles.playButton}>
                    <i class="fa-solid fa-play"></i>
                    <span>PLAY NOW</span>
                </button>
            </Link>

        </>
    )
}