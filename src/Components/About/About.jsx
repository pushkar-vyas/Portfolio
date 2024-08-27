import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
import logo2 from '../../assets/logo2.jpg'
import './About.css'

const About = () => {
  return (
    <div>
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern}/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={logo2}/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a frontend developer who creates clean, responsive, and user-friendly websites. Check out my projects to see how I turn ideas into engaging web experiences.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"75%"}}></hr></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{width:"50%"}}></hr></div>
                        <div className="about-skill"><p>Git</p> <hr style={{width:"30%"}}></hr></div>
                        <div className="about-skill"><p>TAilwind</p> <hr style={{width:"70%"}}></hr></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{width:"68%"}}></hr></div>
                        <div className="about-skill"><p>C</p> <hr style={{width:"50%"}}></hr></div>
                        
                    </div>
                </div>
              </div>     
                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>Fresher</h1>
                            <p>EXPERIANCE</p>
                        </div>
                        <hr/>
                        <div className="about-achievement">
                            <h1>20+</h1>
                            <p>PROJECT COMPLETED</p>
                        </div>
                        <hr/>
                        <div className="about-achievement">
                            <h1>Online 24/7</h1>
                            <p>SUPPORT</p>
                        </div>
                    </div>
                
            

        </div>
    </div>
  )
}

export default About