import LayOut from "../../components/layout";
import TVShows from "../../components/TVShows";
import "./index.css"

export default function TVShowsPage(){
    return (
        <>
            <LayOut>
            <div className="TVBanner">
            <img   src="/assets/images/main/test-naskolko-horosho-ty-znaesh-serial-druzya-1536x864.jpg"/>
            <div className="container">
                <div className="TVBanner-content">
                    <h1 > TV Shows</h1>
                    <i class="fa-solid fa-house-chimney"></i>
                    <span>Home</span>
                    <i class="fa-solid fa-angle-right"></i>
                    <span className="active"> TV Shows</span>
                </div>
            </div>
          </div>
                <TVShows/>
            </LayOut>
        </>
    )
}