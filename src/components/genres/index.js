import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./genres.module.css"

export default function Genres(){
    const [genres,setGenres] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
         getGenre()
    },[]);

    async function getGenre(){
        try{
            setLoading(true);
            const response = await axios.get("https://moviesapi.ir/api/v1/genres");
            setGenres(response.data);
            setLoading(false);
        }
        catch {
            setLoading(false);
        }
    }
    function renderGenres(){
        return genres.map(function(genre){
            const {id,name} = genre;
            return(
                <li key = {id}>
                    <Link to = {`/genre/${id}/${name}`}><p>{name}</p></Link>
                </li>
            )
        })
    }
    return (
        <div className={styles.genres}>
            <ul className = {styles.genresList}>
                {renderGenres()}
            </ul>
        </div>
    )
}