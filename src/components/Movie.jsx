import React from "react";

export default function Movie(props) {
    return (
        <div className="movie-info">
            <img src={props.Poster_Link} alt="movie_img" />
            <h4 className="movie-info-title">{props.Series_Title}</h4>
            <p className="movie-info-overview">{props.Overview}</p>
            <h6 className="movie-info-genre">{props.Genre}</h6>
            <h6 className="movie-info-runtime">{props.Runtime}</h6>
        </div>
    );
}