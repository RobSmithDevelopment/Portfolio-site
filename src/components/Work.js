import React from "react";
import PortfolioCard from './PortfolioCard';

const projects = [
  {
    id: 1,
    title: 'Netflix Clone site',
    imageUrl: 'https://scontent.flba3-1.fna.fbcdn.net/v/t1.15752-9/332399200_868281514471468_6298630492737746279_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ptACTRMZpjAAX9GDHDC&_nc_ht=scontent.flba3-1.fna&oh=03_AdQmDjWm6dZqUOO7nYxgsOkqHxLIEI6-Rpfw7q5ZsCdzuQ&oe=64275432',
    description: ' A Netflix clone site made as a bootcamp project',
    linkUrl: 'http://netflixclone.robertsmithdevelopment.co.uk/',
    linkText: 'View Project',
  },
  {
    id: 2,
    title: 'Project 2',
    imageUrl: 'https://via.placeholder.com/400x300',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkUrl: 'https://example.com',
    linkText: 'View Project',
  },
];


const Work = () => {
    return (
        <>
            <h1 className="work-title">My Projects</h1>
            <div className="work-container">
                {projects.map((project) => (
                <PortfolioCard
                    key={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    description={project.description}
                    linkUrl={project.linkUrl}
                    linkText={project.linkText}
                />
                ))}
            </div>
      </>
    )
}

export default Work;