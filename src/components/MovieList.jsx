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
            <Movie movies={movie} />) : (<div>Error</div>)
    );
}   