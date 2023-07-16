import LayOut from '../../components/layout';
import ReactDOM from "react-dom";
import Banner from '../../components/banner';
import Movies from '../../components/movies';
import React , { useState,useEffect } from 'react';
import axios from 'axios';
import SlideMovies from "../../components/slideMovies";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';




export default function Home(){
    const [movies,setMovies] = useState([]);
    const [moreMovies,setMoreMovies] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        document.title = "Streamlab";
      },[]);
    useEffect( ()=>{
        getApi();
    } , [] );
    useEffect( ()=>{
        getMoreApi();
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
            const response = await axios.get("https://moviesapi.ir/api/v1/movies",{params:{page:2}});
            setMoreMovies(response.data.data)}
            catch(error) {
                setLoading(false)
            }}
    return(
        <>
            <LayOut>
                <Banner/>
                <SlideMovies info={movies} link={"/Movies"} title="All Time Hits" more="More Videos"/>
                <SlideMovies info={moreMovies} link={"/Movies"} title="Top Regional Shows" more="More Videos"/>
               
            </LayOut>
        </>
    )
}