import React from "react";
import { NavLink } from "react-router-dom";
import "./Movie.css"

export default function Movie(props) {

    let newProps = props;

    newProps.movies.map((movie, index) => {
        let overview = movie.Overview;
        if (overview.length > 100) {
            props.movies[index].Overview = overview.substr(0, 100) + "...";
        }
    })

    return (
        <>
            {props.movies.map((movie) => (
                <div className="movie-info">
                    <img src={movie.Poster_Link} alt="movie_img" />
                    <NavLink className="product-item" to={"/movies/" + movie.id}>
                        <h4 className="movie-info-title">{movie.Series_Title}</h4>
                    </NavLink>
                    <p className="movie-info-overview">{movie.Overview}</p>
                    <h6 className="movie-info-genre">{movie.Genre}</h6>
                    <h6 className="movie-info-runtime">{movie.Runtime}</h6>
                </div>
            ))}
        </>
    );
}