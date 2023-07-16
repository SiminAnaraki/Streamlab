import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

export default function Movies(){
    const [movies,setMovies] = useState([])
    useEffect( ()=>{
        getApi();
    } , [] )
    function getApi(){
        axios.get("https://moviesapi.ir/api/v1/movies",{params:{page:1}})
  .then(function (response) {
    setMovies(response.data.data);
    console.log(movies)
    })}
    
    function renderFarm(){
      return movies.map((movie) => {
        const {poster,title,id} = movie
        return (
          <li key={id}>
            <Link to = {`/Movies/${id}`}>
              <img src={poster}/>
              <h3>{title}</h3>
            </Link>
          </li>
          
        )}
    )}
    return (
      <div className="movies">
        <div className="container">
          <div>
          <ul className='eachFilm'>
            {renderFarm()}
          </ul>
          </div>
          <br></br>
          <br></br>
          <div className='pagination'>
          <Pagination defaultCurrent={1} total={250} />
          </div>
          
        </div>
      </div>

    )}
 
    
