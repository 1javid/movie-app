import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export default function Main() {

    const [movies, setMovies] = useState(null);
    const [pageNum, setPageNum] = useState(1);

    function previousClick() {
        if (pageNum => 1) setPageNum(pageNum - 1);
    }

    function nextClick() {
        if (pageNum <= 100) setPageNum(pageNum + 1);
    }

    useEffect(() => {
        let url = `http://localhost:3001/movies?_page=${pageNum}&_limit=54`;
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
                <Movie movies={movies} />
                <nav>
                    <ul class="pagination">
                        <li class="page-item">
                            <button class="page-link" aria-label="Previous" onClick={previousClick}>
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </button>
                        </li>
                        <li>
                            <button class="page-link" aria-label="Next" onClick={nextClick}>
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </>) : (<div>Loading...</div>)
    );
}   