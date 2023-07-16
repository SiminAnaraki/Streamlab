import { useState } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";

export default function Search(){
    const [reply,setReply] = useState([]);
    const [loading,setLoading] = useState(false)
     async function onSearch(input) {
        try {
        setLoading(true);
        const value = input.target.value;
        const response = await axios.get("https://moviesapi.ir/api/v1/movies",
        {params: {q:value} });
        setReply(response.data.data);
        setLoading(false);
        }
        catch(error){
            setLoading(false)}
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
                <button onClick={onSearch}>
                <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="reply">
                {loading === true ? "Loading" : 
                <ul>
                {renderFarm()}
                </ul>
                }
            </div>
        </div>
    )
}