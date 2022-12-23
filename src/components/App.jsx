import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MovieList from "./MovieList";
import MovieInfo from "./MovieInfo";
import Contact from "./Contact";
import NotFoundPage from "./NotFoundPage";
import Navbar from "./Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element=<Home /> />
                <Route path="/movies" element=<MovieList /> />
                <Route path="/movies/:movieId" element=<MovieInfo /> />
                <Route path="/contact-us" element=<Contact /> />
                <Route path="/*" element=<NotFoundPage /> />
            </Routes>
        </>
    );
}
