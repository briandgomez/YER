import React, { useEffect, useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setPage] = useState(1);
    const [title, setTitle] = useState('');

    function handleIncrement(event){
        event === 'left-button' ? setPage(currentPage - 1) : setPage(currentPage + 1);
    }

    const API_KEY = 'api_key=' + process.env.REACT_APP_API_KEY;
    const IMG_SIZE = 'https://image.tmdb.org/t/p/original';
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL = BASE_URL + '/movie/popular?' + API_KEY + `&language=en-US&page=${currentPage}`;

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
    }, [currentPage])

    const movieSubmit = (e) => {
        e.preventDefault();
        fetch(BASE_URL + '/search/movie?' + API_KEY + '&query=' + title)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
    };

    return (
        <div className="movies">
            <h1>Movies</h1>
            <form onSubmit={movieSubmit}>
                <input type={"text"} placeholder="Search..." name="Search input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <button id="search-btn" type="Submit"><i className="fa fa-search">Go</i></button>
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
                <button onClick={() => handleIncrement('left-button')}>
                    <i className="arrow left"></i>
                </button>
                <p>{currentPage}</p>
                <button onClick={() => handleIncrement('right-button')}>
                    <i className="arrow right"></i>
                </button>
            </div>
        </div>
    )
}

export default Movies;