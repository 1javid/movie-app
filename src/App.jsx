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
                <Route path="/home" element=<Home /> />
                <Route path="/movies" element=<MovieList /> />
                <Route path="/movies?page=:pageNum" element=<MovieList /> />
                <Route path="/movies/:movieId" element=<MovieInfo /> />
                <Route path="/contact" element=<Contact /> />
                <Route path="/*" element=<NotFoundPage /> />
            </Routes>
        </>
    );
}
