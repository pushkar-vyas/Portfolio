import React from 'react'
import profile_img from '../../assets/profile_img.svg'
import './Hero.css'
import CV from '../../assets/Pushkar-CV.pdf'
import logo1 from '../../assets/logo1.jpg'
import logo2 from '../../assets/logo2.jpg'

const Hero = () => {
  return (
    <div>
        <div className='hero' id='hero'>
            
                <img src={logo2}/>
                <h1><span className='hero_span'> Pushkar Vyas</span> <br/>Frontend Developer</h1>
                <p>I am a frontend developer from Dewas,Madhya Pradesh, I creates visually appealing website using Tailwind and React JS.</p>
                <div className="hero-action">
                    <div className="hero-connect">Connect with me</div>
                    <div className="hero-resume">
                    <a download='' href={CV} alt='resume file' className='button button--flex'>
                        My resume</a></div>
                </div>
            
        </div>
    </div>
  )
}

export default Hero