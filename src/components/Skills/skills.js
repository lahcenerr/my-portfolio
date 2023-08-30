import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section className="about">
      <h1 className='aboutMe'> ABOUT ME</h1>
      <div className="aboutContent">
        <div className="aboutContentDetails">
          <h2 className='about-title'>More about me!</h2> <br />
          <p className='about-details'>Highly skilled software developer with strong problem-solving abilities and a passion for creating efficient, scalable web applications. 
          Experienced in full-stack development, agile methodologies, and collaborating with cross-functional teams. 
          Proven track record of delivering high-quality projects on time.

          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3> <br />
          <div className="skillsItems">
            <div className="skillsItem">Python</div>  
            <div className="skillsItem">Django</div>  
            <div className="skillsItem">API</div>  
            <div className="skillsItem">Databases</div>  
            <div className="skillsItem">AWS</div>  
            <div className="skillsItem">Javascript</div>  
            <div className="skillsItem">Angular</div>  
            <div className="skillsItem">Html</div>  
            <div className="skillsItem">CSS</div>  
            <div className="skillsItem">React</div>  
            <div className="skillsItem">Git</div>  
            <div className="skillsItem">Linux</div>  
          </div>
        </div>
      </div>


    </section>
    
  )
}

export default Skills
