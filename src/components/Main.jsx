import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import axios from 'axios';

export default function Main() {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        let url = `http://localhost:3000/movies`;
        axios.get(url)
            .then((response) => {
                setMovie(response.data);
                console.log(response.data);
            })
    }, []);

    return (
        movie ? (
            <Movie
                Poster_Link={movie[0].Poster_Link}
                Series_Title={movie[0].Series_Title}
                Overview={movie[0].Overview}
                Genre={movie[0].Genre}
                Runtime={movie[0].Runtime}
            />) : (<div>Error</div>)
    );
}   