import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

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
          <Pagination defaultCurrent={movies.metadata.current_page} total={movies.metadata.total_count}  onChange={changePage}/>
          </div>
          
        </div>
      </div>

    )}
 
    
