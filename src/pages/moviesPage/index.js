import LayOut from '../../components/layout';
import Movies from '../../components/movies';
import "./index.css"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MoviesPage(){
    useEffect(()=>{
        document.title = "Streamlab/Movies";
      },[]);
    return(
        <>
            <LayOut>
            <div className="movieBanner">
            <img   src="/assets/images/main/thumb-1920-675409.jpg"/>
            <div className="container">
                <div className="movieBanner-content">
                    <h1 > Movies</h1>
                    <i class="fa-solid fa-house-chimney"></i>
                    <Link to="/"><span>Home</span></Link>
                    <i class="fa-solid fa-angle-right"></i>
                    <span className="active"> Movies</span>
                </div>
            </div>
          </div>
          <Movies/>
            </LayOut>
        </>
    )
}