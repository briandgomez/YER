import React, { useEffect, useState } from "react";

const TV = () => {
    const [tv, setTv] = useState([]);
    const [currentPage, setPage] = useState(1);
    const [title, setTitle] = useState('');

    const incrementByOne = () => {
        setPage(currentPage + 1);
    }
    const decrementByOne = () => {
        setPage(currentPage - 1);
    }

    const API_KEY = 'api_key=' + process.env.REACT_APP_API_KEY;
    const IMG_SIZE = 'https://image.tmdb.org/t/p/original';
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL = BASE_URL + '/tv/top_rated?' + API_KEY + `&language=en-US&page=${currentPage}`;

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setTv(data.results)
            })
    }, [currentPage])

    const movieSubmit = (e) => {
        e.preventDefault();

        fetch(BASE_URL + '/search/tv?' + API_KEY + '&query=' + title + `&language=en-US&page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => {
                setTv(data.results)
            })
    };

    return (
        <div className="movies">
            <h1>TV-Shows</h1>

            <form onSubmit={movieSubmit}>
                <input type={"text"} placeholder="Search..." name="Search input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
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

            <div className='directional'>
                <button onClick={decrementByOne}>
                    <i className="arrow left"></i>
                </button>
                <p>{currentPage}</p>
                <button onClick={incrementByOne}>
                    <i className="arrow right"></i>
                </button>
            </div>
        </div>
    )
}

export default TV;