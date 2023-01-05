import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function Main() {

    const [movies, setMovies] = useState(null);
    const [pageNum, setPageNum] = useState(1);

    function previousClick() {
        if (pageNum > 1) setPageNum(pageNum - 1);
    }

    function nextClick() {
        if (pageNum < 40) setPageNum(pageNum + 1);
    }

    useEffect(() => {
        let url = `http://localhost:3001/movies?_page=${pageNum}&_limit=25`;
        axios.get(url)
            .then((response) => {
                setMovies(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [pageNum]);

    return (
        movies ? (
            <>
                <h1 className="title">IMDB 1000 MOVIES</h1>

                <div className="movie-list">
                    <Movie movies={movies} />
                </div>

                <div className="pagination">
                    <ul className="pagination">
                        <li className="page-button">
                            <button className="page-link" aria-label="Previous" onClick={previousClick}>
                                <KeyboardDoubleArrowLeftIcon />
                            </button>
                        </li>
                        <div className="page-status">{pageNum + "/40"}</div>
                        <li className="page-buttton">
                            <button className="page-link" aria-label="Next" onClick={nextClick}>
                                <KeyboardDoubleArrowRightIcon />
                            </button>
                        </li>
                    </ul>
                </div>
            </>) : (<div>Loading...</div>)
    );
}