// Projects.jsx
import React from 'react';

const projects = [
    { title: 'Project 1', description: 'Description of project 1', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
