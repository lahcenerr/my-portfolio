import React from 'react'
import './intro.css'
// import intro from '../../assets/intro-img.png'
// import python from '../../assets/python.png'
// import django from '../../assets/django.png'
// import javascript from '../../assets/javascript.png'
// import angular from '../../assets/angular.png'
// import aws from '../../assets/aws.png'
// import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section className="intro" id='intro'>
        <div className="introContent">
            <h1 className='greeting'>Hello,</h1>
            <h3 className='my-name'><i>My name is Lahcen Errich.</i></h3>
            <p className='introduction'>I am a full stack developer with experience in both front and back end. 
            </p> <br />
            {/* <Link><button className="hireMe"><img src="" alt="" />Hire Me</button></Link> */}
        </div>
        {/* <div className="images">
          <button><img animate-bounce w-6 h-6 src={python} alt="python" id='introImage'/></button>
          <img src={django} alt="django" id='introImage'/>
          <img src={javascript} alt="javascript" id='introImage'/>
          <img src={angular} alt="angular" id='introImage'/>
          <button><img src={aws} alt="aws" id='introImage'/></button>
          <img src={intro} alt="Intro" id='introImage'/>
        </div> */}
        
    </section>
  )
}

export default Intro
