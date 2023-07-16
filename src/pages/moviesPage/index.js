import LayOut from '../../components/layout';
import Movies from '../../components/movies';

export default function MoviesPage(){
    return(
        <>
            <LayOut>
            <div className="banner">
            <img src="/assets/images/main/lf.jfif"/>
            <div className="container">
                <div className="banner-content">
                    <h1 > Movies</h1>
                    <i class="fa-solid fa-house-chimney"></i>
                    <span>Home</span>
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