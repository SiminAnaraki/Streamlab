import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";

export default function Search(){
    const [reply,setReply] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(function(){
        onSearch()
    },[reply])
     async function onSearch(input) {
        try {
        
        const value = input.target.value;
        if (value.length===0){
            emptyReply()
            
        }
        else {
        setLoading(true);
        const response = await axios.get("https://moviesapi.ir/api/v1/movies",
        {params: {q:value} });
        setReply(response.data.data);
        setLoading(false);
        const empty = document.getElementsByClassName("showReply");
            for(var element of empty)
                element.style.visibility = "visible"
        const emptyShadow = document.getElementsByClassName("reply");
            for (var element of emptyShadow)
                element.classList.remove("invisible")
        }}
        catch(error){
            setLoading(false)}
        }
    function emptyReply(){
        const empty = document.getElementsByClassName("showReply");
        
        for(var element of empty)
            element.style.visibility = "hidden"
            const emptyShadow = document.getElementsByClassName("reply");
        for (var element of emptyShadow)
            element.classList.add("invisible")
        
        return;
    }
    
    function renderFarm(){
        return reply.map(function(movie){
            const {id,title,poster} = movie;
            return (
                <li key={id}>
                    <Link to={`/Movies/${id}`}>
                    <div className="eachReply">
                        <img src={poster}/>
                        <p>{title}</p>
                    </div>
                    </Link>

                </li>
            )
        })
    }
    return (
        <div className="search">
            <input type="text" placeholder="Search ..." onChange={onSearch}/>
            <div className="searchButton">
                <button className="redButton" onClick={onSearch}>
                <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="reply">
                {loading === true ? "Loading" : 
                <ul className="showReply">
                {renderFarm()}
                </ul>
                }
            </div>
        </div>
    )}
