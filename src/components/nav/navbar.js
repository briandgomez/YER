import React, {useState} from "react";
import Movies from '../Movies/Movies';
import TV from '../TV-Shows/TV';

const Nav = () => {
    const [currentPage, changePage] = useState('movies');

    const changeCurrentPage = (event) => {
        event === 'movies' ? changePage('movies') : changePage('tv');
    }

    return (
        <div className="tabs">
            <header>
                <ul className="nav">
                    <li className={currentPage === 'movies' ? "active" : ""} onClick={() => changeCurrentPage('movies')}>Movies</li>
                    <li className={currentPage === 'tv' ? "active" : ""} onClick={() => changeCurrentPage('tv')}>TV-Shows</li>
                </ul>
            </header>

            <div className="page">
                {currentPage === 'movies' ? <Movies/> : <TV/>}
            </div>

        </div>
    )
}

export default Nav;