import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleGenre(){
    const {genreid} = useParams();
    const [genre,setGenre] = useState([]);
    useEffect(()=>{
        getApi()
    },[]);
       function getApi() {
        axios.get(`https://moviesapi.ir/api/v1/genres/${genreid}/movies`)
        .then(function (response) {
          setGenre(response.data.data);
        }
          )}
        function genreFarm(){
            return genre.map(function(eachGenre){
                const {id ,poster,title,genres} = eachGenre;
                return (
                    <li>
                        <img src={poster}/>
                    </li>
                )})
            }
                
    return(
        <>
        <ul>
            {genreFarm()}
        </ul>
        </>
    )
          
          
        
      }
    

    

