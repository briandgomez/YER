import React, { useEffect, useState } from "react";

const API_KEY = 'api_key=' + process.env.REACT_APP_API_KEY;
const IMG_SIZE = 'https://image.tmdb.org/t/p/original';
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + '/tv/top_rated?' + API_KEY + '&language=en-US&page=2';

const TV = () => {
    const [tv, setTv] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results)
                setTv(data.results)
            })
    }, [])

    return (
        <div className="movies">
            <h1>TV-Shows</h1>

            <form>
                <input type={"text"} placeholder="Search..." name="Search input"></input>
                <button id="search-btn" type="Submit"><i class="fa fa-search">Go</i></button>
            </form>
            <div className="card-layout">
                {tv.map(item => (
                    <div className="card-div">
                        <div className="card">
                            <img src={IMG_SIZE + item.poster_path} />
                            <div className="container">
                                <p>{item.name}</p>
                            </div>
                            <p>{item.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TV;