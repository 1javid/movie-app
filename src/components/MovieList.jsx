import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import axios from 'axios';

export default function Main() {

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        let url = `http://localhost:3000/movies`;
        axios.get(url)
            .then((response) => {
                setMovies(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        movies ? (
            <Movie movies={movies} />) : (<div>Loading...</div>)
    );
}   