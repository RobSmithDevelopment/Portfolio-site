import React from "react";
import PortfolioCard from './PortfolioCard';

const projects = [
  {
    id: 1,
    title: 'Hangman',
    imageUrl: 'https://scontent.flba3-2.fna.fbcdn.net/v/t1.15752-9/334586912_444470694529532_4346614830035023804_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=eUweSU-ZcC0AX_0VGu8&_nc_ht=scontent.flba3-2.fna&oh=03_AdQrBcJ2I2erxHgZaqQmZ9LrVYzT0cN7U2Wb1Ru19DngPQ&oe=64349DAA',
    description: 'Hangman game created in React.',
    linkUrl: 'http://hangman.robertsmithdevelopment.co.uk/',
    linkText: 'View Project',
  },
  {
    id: 2,
    title: 'Weather App',
    imageUrl: 'https://scontent.flba3-1.fna.fbcdn.net/v/t1.15752-9/333180622_917392196182721_4262620517518875375_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=A901bTaROwoAX8nzJe7&_nc_ht=scontent.flba3-1.fna&oh=03_AdRkGEto7LMUOfQe3IIfBA67atxNxaqGxNONUa5tgrcm6g&oe=6436B862',
    description: 'Weather app created using HTML, CSS and Javascript and utilising api calls. This application will take a valid place name and return the temperature, the current weather state with an icon, will tell you the wind speed and the humidity, as well as changing the background of the page to a relevant picture to the location.',
    linkUrl: 'http://weather.robertsmithdevelopment.co.uk/',
    linkText: 'View Project',
  },
  {
    id: 3,
    title: 'Netflix Clone site',
    imageUrl: 'https://scontent.flba3-1.fna.fbcdn.net/v/t1.15752-9/332399200_868281514471468_6298630492737746279_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ptACTRMZpjAAX9GDHDC&_nc_ht=scontent.flba3-1.fna&oh=03_AdQmDjWm6dZqUOO7nYxgsOkqHxLIEI6-Rpfw7q5ZsCdzuQ&oe=64275432',
    description: ' A Netflix clone site made as a bootcamp project created with React. This site is a clone of the main signup page of netflix. It is fully responsive and utilising react components.',
    linkUrl: 'http://netflixclone.robertsmithdevelopment.co.uk/',
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