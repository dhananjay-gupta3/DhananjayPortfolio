import React from "react";
import portfolio from '../assets/portfolio/portfolio.jpg';
import movie from '../assets/portfolio/movie.jpg';
import bmi from '../assets/portfolio/bmi.jpg';
import weather from '../assets/portfolio/weather.jpg';

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      link: "https://www.linkedin.com/in/dhananjay-gupta-661078239/"
    },
    {
      id: 2,
      src: movie,
      link: "https://github.com/dhananjay-gupta3"
    },
    {
      id: 3,
      src: bmi,
      link: "https://github.com/dhananjay-gupta3/BMI-calculater"
    },
    {
      id: 4,
      src: weather,
      link: "https://github.com/dhananjay-gupta3/Weather-App"
    },
    
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
           Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center p-2 justify-center">
                <a href={link} >Code </a>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
