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
          <h3 className="project-title">Simple Ecommerce Website</h3>
          <span className="project-details">The development of this website was inspired by Amazon. 
          The way we can easily search for products and the responsive and the look of the website makes it the leading ecommerce application in the world.
          My website was built using Python framework Django for the backend and Angular for the front end.
          </span>
          <br /><br />
          <span className="tech-stack"><strong>Tech Stack:</strong> Python, Django, Angular, Html, CSS, AWS</span>
        </div>
        <div className="project">
          <h3 className="project-title">Recognize Celebrities</h3>
          <span className="project-details">
            Amazon Rekognition offers both celebrity recognition and face recognition functionality.
            In this fun hands-on project, a Lambda function is triggered when an image is uploaded to an Amazon S3 bucket. 
            The Lambda function will then call the RecognizeCelebrities API to identify the person in the photo! 
          </span>
          <br /><br />
          <span className="tech-stack"><strong>Tech Stack:</strong> AWS, Amazon Rekognition , AWS Lambda, AWS S3</span>
        </div>
        <div className="project">
          <h3 className="project-title">Movie Rater</h3>
          <span className="project-details">
            This site is a simple full stack website built using Django for the back end and Angular for front end
            Users of the site can add, update, or delete a movie. They are also able to rate a movie. 
          </span>
          <br /><br />
          <span className="tech-stack"><strong>Tech Stack:</strong> Python, Django, Angular, Html, CSS</span>
        </div>
        <div className="project">
          <h3 className="project-title">Stock Analysis</h3>
          <span className="project-details">
            Stock Analysis is one of the hardest analysis nowdays due to the variety of parameters involved.
            However, because of the high progress of AI, developers started building high performance AI tools for stocks analysis. 
            Python and it's libraries have became the most used tools for stock analysis.
            In this project,  I have built a dashboard where one can visualize stocks prices and their predictions.
          </span>
          <br /><br />
          <span className="tech-stack"><strong>Tech Stack:</strong> Python, Pandas, Yfinance</span>
        </div>
        <div className="project">
          <h3 className="project-title">Subscribed Youtube Channels</h3>
          <span className="project-details">
            Welcome to this data analysis and the statistics of the most subscribed YouTube channels.
            With comprehensive details on top creators' subscriber counts, video views, upload frequency, country of origin, earnings, and more,
            </span>
          <br /><br />
          <span className="tech-stack"><strong>Tech Stack:</strong> Python, Pandas, Numpy</span>
        </div>
      </div>
    </section>
  );
}

export default Projects
