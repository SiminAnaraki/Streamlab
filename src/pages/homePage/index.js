import LayOut from '../../components/layout';
import ReactDOM from "react-dom";
import Banner from '../../components/banner';
import React , { useState,useEffect } from 'react';
import axios from 'axios';
import SlideMovies from "../../components/slideMovies";
import ProgressSlide from '../../components/progressSlide';
import App from '../../components/thumbsSlide';
import ThumbsSlide from '../../components/thumbsSlide';

export default function Home(){
    const [movies,setMovies] = useState([]);
    const [moreMovies,setMoreMovies] = useState([]);
    const [thumbs,setThumbs] = useState([]);
    const [loading,setLoading] = useState(false);
    const [genres,setGenres] = useState([]);
    const [moreGenres,setMoreGenres] = useState([]);
    
    useEffect(()=>{
        document.title = "Streamlab";
      },[]);
    useEffect( ()=>{
        getApi();
    } , [] );
    useEffect( ()=>{
        getMoreApi();
    } , [] );
    useEffect( ()=>{
        getThumbs();
    } , [] );
    useEffect( ()=>{
        getGenre();
    } , [] );
    useEffect( ()=>{
        getMoreGenre();
    } , [] );
    async function getApi(){
        try {
        setLoading(true)
        const response = await axios.get("https://moviesapi.ir/api/v1/movies");
        setMovies(response.data.data)}
        catch(error) {
            setLoading(false)
        }}
    async function getMoreApi(){
        try {
            setLoading(true)
            const response = await axios.get("https://moviesapi.ir/api/v1/movies",{params:{page:13}});
            setMoreMovies(response.data.data)}
            catch(error) {
                setLoading(false)
            }}
    async function getThumbs(){
        try {
            setLoading(true)
            const response = await axios.get("https://moviesapi.ir/api/v1/genres/15/movies");
            setThumbs(response.data.data)}
            catch(error) {
                setLoading(false)
            }}
    async function getGenre(){
        try{
            setLoading(true);
            const response = await axios.get(`https://moviesapi.ir/api/v1/genres/16/movies`);
            setGenres(response.data.data);
            setLoading(false);
            }
            catch {
                setLoading(false);
            }
                
            }
    async function getMoreGenre(){
        try{
            setLoading(true);
            const response = await axios.get(`https://moviesapi.ir/api/v1/genres/19/movies`);
            setMoreGenres(response.data.data);
            setLoading(false);
            }
            catch {
                setLoading(false);
                }
                        
            }
    return(
        <>
            <LayOut>
                <Banner/>
                <br></br>
                <SlideMovies info={movies} link={"/Movies"} title="All Time Hits" more="More Movies"/>
                <SlideMovies info={moreMovies} link={"/Movies"} title="Top Regional Shows" more="More Movies"/>
                <br></br>
                <br></br>
                <ThumbsSlide info={thumbs}/>
                <SlideMovies info={genres} link={"/all"} title="Watch For Free: Romantic Movies" more="More Genres"/>
                <br></br>
                <ProgressSlide/>
                <br></br>
                <SlideMovies info={moreGenres} link={"/all"} title="Watch For Free: Romantic Movies" more="More Genres"/>
                <br></br>
                <br></br>
            </LayOut>
        </>
    )
}