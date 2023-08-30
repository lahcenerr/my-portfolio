import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="title">Projects</h1>
      <div className="projects-details">
        <div className="project">
          <h3  className="project-title">My Personal Portfolio</h3>
          <span className="project-details">This website was built to showcase my skills and projects. 
          It was developed using React. the website is hosted on AWS... 
          </span>
          <br /><br />
          <span className="tech-stack"><strong>Tech Stack:</strong> React, Html, CSS, AWS</span>
        </div>
        <div className="project">
          <h3 className="project-title">Project 2</h3>
          <span className="project-details">This is my project 2</span>
          <span className="tech-stack"></span>
        </div>
        <div className="project">
          <h3 className="project-title">Project 3</h3>
          <span className="project-details">This is my project 3</span>
          <span className="tech-stack"></span>
        </div>
        <div className="project">
          <h3 className="project-title">Project 4</h3>
          <span className="project-details">This is my project 4</span>
          <span className="tech-stack"></span>
        </div>
        <div className="project">
          <h3 className="project-title">Project 5</h3>
          <span className="project-details">This is my project 5</span>
          <span className="tech-stack"></span>
        </div>
        <div className="project">
          <h3 className="project-title">Project 6</h3>
          <span className="project-details">This is my project 6</span>
          <span className="tech-stack"></span>
        </div>
      </div>
    </section>
  );
}

export default Projects
