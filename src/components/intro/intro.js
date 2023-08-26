import React from 'react'
import './intro.css'
import intro from '../../assets/intro-img.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section className="intro">
        <div className="introContent">
            <h1>Hello,</h1>
            <h3><i>My name is Lahcen Errich.</i></h3>
            <p>Highly skilled software developer, Strong problem-solving abilities and a passion for creating efficient, scalable web applications. 
               Experienced in full-stack development, agile methodologies, and collaborating with cross-functional teams. 
               Proven track record of delivering high-quality projects on time.
            </p> <br />
            <Link><button className="hireMe"><img src="" alt="" />Hire Me</button></Link>
        </div>
        <img src={intro} alt="Intro" id='introImage'/>
    </section>
  )
}

export default Intro
