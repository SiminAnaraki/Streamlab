import LayOut from "../../components/layout";
import Genres from "../../components/genres";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./allGenres.module.css"


export default function AllGenres(){
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
        <>
        <LayOut>
        <div className={styles.genres}>
            <img className={styles.genresBack} src="/assets/images/main/lord.jpg"/>
                <ul className = {styles.genresList}>
                    {renderGenres()}
                </ul>
        </div>
        </LayOut>
        </>
    )
}