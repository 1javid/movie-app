import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/movie-app/" element=<Home /> />
                <Route path="/movie-app/movies" element=<MovieList /> />
                <Route path="/movie-app/movies?page=:pageNum" element=<MovieList /> />
                <Route path="/movie-app/movies/:movieId" element=<MovieInfo /> />
                <Route path="/movie-app/contact" element=<Contact /> />
                <Route path="/movie-app/*" element=<NotFoundPage /> />
            </Routes>
        </>
    );
}
