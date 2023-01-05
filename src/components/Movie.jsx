import React from "react";
import { NavLink } from "react-router-dom";
import "./Movie.css"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Movie(props) {

    let newProps = props;
    newProps.movies.map((movie, index) => {
        let overview = movie.Overview;
        if (overview.length > 100) {
            props.movies[index].Overview = overview.substr(0, 100) + "...";
        }
    })

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = function (panel) {
        return function (event, isExpanded) {
            setExpanded(isExpanded ? panel : false);
        };
    };

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="movie">
                    <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{ width: "100%" }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}>
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                <img class="poster" src={movie.Poster_Link} alt="movie_img" />
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                <NavLink className="product-item" to={"/movies/" + movie.id}>
                                    <h4 className="movie-info-title">{movie.Series_Title}</h4>
                                </NavLink>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="movie-info-overview"><i>{movie.Overview}</i></p>
                                <h6 className="movie-info-genre">{movie.Genre}</h6>
                                <h6 className="movie-info-runtime">{movie.Runtime}</h6>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ))
            }
        </>
    );
}