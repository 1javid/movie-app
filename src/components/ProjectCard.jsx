import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="card">
            <div style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: '260px'
            }} className="img"></div>
            <h4 className="name">{project.name}</h4>
            <a style={{ textDecoration: 'none' }} href={project.github.jamaladdin} target="_blank">Jamaladdin Talishinskiy</a>
            <a style={{ textDecoration: 'none' }} href={project.github.javid} target="_blank">Javid Alakbarli</a>
            <a style={{ marginBottom: '15px', textDecoration: 'none' }} href={project.github.anar} target="_blank">Anar Bayramov</a>
        </div>
    );
};

export default ProjectCard;