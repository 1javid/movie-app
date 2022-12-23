import React from "react";
import img from "../assets/images/download.webp";
import "./NotFoundPage.css";

export default function NoMatchRoute() {
    return <img className="not-found" src={img} alt="page-not-found-img" />;
}
