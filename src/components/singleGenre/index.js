import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./singleGenre.module.css";

export default function SingleGenre(){
    const {genreid,name} = useParams();
    const [genre,setGenre] = useState([]);
    useEffect(()=>{
        getApi()
    },[genreid]);
       function getApi() {
        axios.get(`https://moviesapi.ir/api/v1/genres/${genreid}/movies`)
        .then(function (response) {
          setGenre(response.data.data);
        }
          )}
        function genreFarm(){
            return genre.map(function(eachGenre){
                const {id ,poster,title} = eachGenre;
                return (
                    <li key={id}>
                        <Link to= {`/Movies/${id}`}><img src={poster}/>
                            <h4>{title}</h4>
                        </Link>
                    </li>
                )})
            }
                
    return(
        <>
            <div className="container">
            <h1 className={styles.groupName}>{name}</h1>
                <ul className={styles.singleGenreList}>
                    {genreFarm()}
                </ul>
            </div>
        </>
        
    )
          
          
        
      }
    

    

