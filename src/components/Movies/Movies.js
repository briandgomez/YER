import React, { useEffect, useState } from "react";

const Movies = () => {
    // Movies - current movie object from 'results'
    // setMovies - changes the current movie object
    const [movies, setMovies] = useState([]);
    //Defaults 'currentPage' to 1
    const [currentPage, setPage] = useState(1);

    const [title, setTitle] = useState('');

    //Increment and decrement page by 1
    const incrementByOne = () => {
        setPage(currentPage + 1);
    }
    const decrementByOne = () => {
        setPage(currentPage - 1);
    }

    const API_KEY = 'api_key=' + process.env.REACT_APP_API_KEY;
    const IMG_SIZE = 'https://image.tmdb.org/t/p/original';
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL = BASE_URL + '/movie/popular?' + API_KEY + `&language=en-US&page=${currentPage}`;

    //Arrow function indicates that everything inside {} will execute EVERTYIME the app renders
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
        //Empty array will call useEffect and fetch API only 1 time(when initially rendered)
        //Adding 'curretPage' inside the array causes the useEffect function to run whenever there is a change to the parameter
    }, [currentPage])

    //Search for the movie with 'title'
    const movieSubmit = (e) => {
        e.preventDefault();

        fetch(BASE_URL + '/search/movie?' + API_KEY + '&query=' + title)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results)
                setMovies(data.results)
            })
    };

    return (
        <div className="movies">
            <h1>Movies</h1>
            {/* Calls 'movieSubmit' */}
            <form onSubmit={movieSubmit}>
                <input type={"text"} placeholder="Search..." name="Search input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
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

            <div className='directional'>
                <button onClick={decrementByOne}>
                    <i class="arrow left"></i>
                </button>
                <p>{currentPage}</p>
                <button onClick={incrementByOne}>
                    <i class="arrow right"></i>
                </button>
            </div>
        </div>
    )
}

export default Movies;