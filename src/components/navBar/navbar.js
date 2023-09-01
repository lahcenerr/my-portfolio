import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll'
import menu from '../../assets/burger1.png'
import profile from '../../assets/profile-photo.jpeg'
import { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
        <div>
          <img src={logo} alt="logo" className='logo' onClick={() => {
              document.getElementById('intro').scrollIntoView({behavior: 'smooth', alignToTop:false});
          }} />
          <img src={profile} alt="" className='profile'/>
        </div>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-250} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
            <Link activeClass='active' to='blog' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Blog</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src= {contact} alt="" className="desktopMenuIcon" /> Contact Me
        </button>
        <div className='mobile-logo'><img src={menu} alt="Menu" className='mobile-logo-image' onClick={() => setShowMenu(!showMenu)} />
        </div>
        <div className="mobileMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-200} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(!false)}>Projects</Link>
            <Link activeClass='active' to='blog' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Blog</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
