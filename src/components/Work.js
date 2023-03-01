import React from "react";
import PortfolioCard from './PortfolioCard';

const projects = [
  {
    id: 1,
    title: 'Netflix Clone site',
    imageUrl: 'https://scontent.flba3-1.fna.fbcdn.net/v/t1.15752-9/332399200_868281514471468_6298630492737746279_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ptACTRMZpjAAX9GDHDC&_nc_ht=scontent.flba3-1.fna&oh=03_AdQmDjWm6dZqUOO7nYxgsOkqHxLIEI6-Rpfw7q5ZsCdzuQ&oe=64275432',
    description: ' A Netflix clone site made as a bootcamp project created with React. This site is a clone of the main signup page of netflix. It is fully responsive and utilising react components.',
    linkUrl: 'http://netflixclone.robertsmithdevelopment.co.uk/',
    linkText: 'View Project',
  },
  {
    id: 2,
    title: 'Interest Calculator',
    imageUrl: 'https://via.placeholder.com/400x300',
    description: 'Calculator created for a bootcamp project, using react and redux. You can deposit an amount to the calculator, subtract a given amount, add interest of 5% and incur charges, subtracting 15%.',
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