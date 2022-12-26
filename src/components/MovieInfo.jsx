import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

export default function MovieItem() {

    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        let url = `http://localhost:3001/movies/${movieId}`;
        axios.get(url)
            .then((response) => {
                setMovie(response.data);
                console.log(response.data);
            })
    }, []);

    return (
        movie ? (
            <>
                <div className="movie-info">
                    <img src={movie.Poster_Link} alt="movie_img" />
                    <h4 className="movie-info-title">{movie.Series_Title}</h4>
                    <p className="movie-info-overview">{movie.Overview}</p>
                    <h6 className="movie-info-genre">{movie.Genre}</h6>
                    <h6 className="movie-info-runtime">{movie.Runtime}</h6>
                    <h6 className="movie-info-year">{movie.Released_Year}</h6>
                    <h6 className="movie-info-certificate">{movie.Certificate}</h6>
                    <h6 className="movie-info-imdb">{movie.IMDB_Rating}</h6>
                    <h6 className="movie-info-score">{movie.Meta_Score}</h6>
                    <h6 className="movie-info-director">{movie.Director}</h6>
                    <h6 className="movie-info-stars">{movie.Star1}</h6>
                    <h6 className="movie-info-stars">{movie.Star2}</h6>
                    <h6 className="movie-info-stars">{movie.Star3}</h6>
                    <h6 className="movie-info-stars">{movie.Star4}</h6>
                    <h6 className="movie-info-votes">{movie.No_of_Votes}</h6>
                    <h6 className="movie-info-gross">{"$" + movie.Gross}</h6>
                </div>
                <form action="http://localhost:3000/movies">
                    <input type="submit" value="Back" />
                </form>
            </>) : (<div>Loading...</div>)
    );
}   