import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
export default function SingleMovie(){
    const{ id } = useParams();
    const [movie,setMovie] = useState({})
    useEffect( ()=>{
        getApi();
    } , [] )
    function getApi(){
        axios.get(`https://moviesapi.ir/api/v1/movies/${id}`)
  .then(function (response) {
    setMovie(response.data);
   
  }
    )}
        const {poster,title,} = movie
        return (
            <>
            <img src={poster}/>
            <h2>{title}</h2>
            </>
          
          
        )
      }
        
 
 