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
        const {poster,title,images=[],year,runtime,director,actors,country,awards,genres,plot} = movie
        function renderImages(){
          return images.map((pic,i)=>{
              return(
                <li key={i} className="pics">
                  <img src={pic}/>
                </li>
                    )
        })
          } 
        
        return (
            <>
            <div className="container">
              <div className="movie">
                <div className="left">
                  <img className="poster" src={poster}/>
                </div>
                <div className="right">
                  <h1>{title}</h1>
                  <p><strong>Year: </strong>{year}</p>
                  <p><strong>Runtime: </strong>{runtime}</p>
                  <p><strong>Director: </strong>{director}</p>
                  <p><strong>Actors: </strong>{actors}</p>
                  <p><strong>Country: </strong>{country}</p>
                  <p><strong>Awards: </strong>{awards}</p>
                  <p><strong>Genres: </strong>{genres}</p>
                  <p className="plot"><strong>Plot: </strong>{plot}</p>
                </div>
              </div>
              <ul className="morePics">
                {renderImages()}
              </ul>
            </div>
            </>
          
          
        )
      }
        
 
 