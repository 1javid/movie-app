import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

    const card = (
        movie ? (
            <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <div className="movie-info-head">
                            <img src={movie.Poster_Link} alt="movie_img" />
                            <h4 className="movie-info-title">{movie.Series_Title}</h4>
                        </div>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <p className="movie-info-overview"><i>{movie.Overview}</i></p>
                    </Typography>
                    <Typography variant="body2">
                        <div className="movie-info-body">
                            <h6 className="movie-info-genre"><b>{"Genre: "}</b>{movie.Genre}</h6>
                            <h6 className="movie-info-runtime"><b>{"Duration: "}</b>{movie.Runtime}</h6>
                            <h6 className="movie-info-year"><b>{"Released: "}</b>{movie.Released_Year}</h6>
                            <h6 className="movie-info-certificate"><b>{"Certificate: "}</b>{movie.Certificate}</h6>
                            <h6 className="movie-info-imdb"><b>{"IMDB Rating: "}</b>{movie.IMDB_Rating}</h6>
                            <h6 className="movie-info-score"><b>{"Meta Score: "}</b>{movie.Meta_score}</h6>
                            <h6 className="movie-info-director"><b>{"Director: "}</b>{movie.Director}</h6>
                            <h6 className="movie-info-stars"><b>{"Actors: "}</b>{movie.Star1 + ", " + movie.Star2 + ", " + movie.Star3 + ", " + movie.Star4}</h6>
                            <h6 className="movie-info-votes"><b>{"Number of Votes: "}</b>{movie.No_of_Votes}</h6>
                            <h6 className="movie-info-gross"><b>{"Gross: "}</b>{"$" + movie.Gross}</h6>
                        </div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <form action="http://localhost:3000/movies">
                        <Button size="small" type="submit">Back</Button>
                    </form>
                </CardActions>
            </React.Fragment>
        ) : (<div>Loading...</div>)
    );

    return (
        <div className="movie-info">
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    );
} 