import React from "react";
import pic from '../../TMDB Color Scheme.png';

const Movies = () => {
    return (
        <div className="movies">
            <h1>Movies</h1>

            <form>
                <input type={"text"} placeholder="Search..." name="Search input"></input>
                <button id="search-btn" type="Submit"><i class="fa fa-search">Go</i></button>
            </form>

            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center" }}>
                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Lorem</p>
                    </div>
                </div>

                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>

                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>

                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>

                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>

                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>


                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>

                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>

                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>

                <div className="card">
                    <img src={pic} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies;