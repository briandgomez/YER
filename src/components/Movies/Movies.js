import React, { useEffect, useState } from "react";

const API_KEY = 'api_key=' + process.env.REACT_APP_API_KEY;
const IMG_SIZE = 'https://image.tmdb.org/t/p/original';
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + '/movie/popular?' + API_KEY + '&language=en-US&page=2';

const Movies = () => {
    // Movies - current movie object from 'results'
    // setMovies - changes the current movie object
    const [movies, setMovies] = useState([])

    //Arrow function indicates that everything inside {} will execute EVERTYIME the app renders
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results)
                setMovies(data.results)
            })
        //Empty array will call useEffect and fetch API only 1 time(when initially rendered)
        //Adding parameters inside the array will cause the useEffect function to run whenever there is a change to the parameter
    }, [])

    return (
        <div className="movies">
            <h1>Movies</h1>

            <form>
                <input type={"text"} placeholder="Search..." name="Search input"></input>
                <button id="search-btn" type="Submit"><i class="fa fa-search">Go</i></button>
            </form>
            <div className="card-layout">
                {movies.map(item => (
                    <div className="card-div">
                        <div className="card">
                            <img src={IMG_SIZE + item.poster_path} />
                            <div className="container">
                                <p>{item.title}</p>
                            </div>
                            <p>{item.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies;