import React from "react";

export default function Movie(props) {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="movie-info">
                    <img src={movie.Poster_Link} alt="movie_img" />
                    <h4 className="movie-info-title">{movie.Series_Title}</h4>
                    <p className="movie-info-overview">{movie.Overview}</p>
                    <h6 className="movie-info-genre">{movie.Genre}</h6>
                    <h6 className="movie-info-runtime">{movie.Runtime}</h6>
                </div>
            ))}
        </>
    );
}