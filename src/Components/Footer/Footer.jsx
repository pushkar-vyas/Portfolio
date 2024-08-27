import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div  className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
           <div className='logo'>
           <h2>Pushkar</h2>
            <img src={theme_pattern}/>
           </div>
           
                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/pushkar-vyas/" className="footer__social-link" target="_blank">
                        <FaLinkedin />
                        </a>

                        <a href="https://github.com/pushkar-vyas" className="footer__social-link" target="_blank">
                        <FaGithub />
                        </a>

                        <a href="pushkarvyas204@gmail.com" className="footer__social-link" target="_blank">

                        <MdOutlineAttachEmail />
                        </a>
                    </div>
                    
            
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon}/>
              <input type='email' placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr/>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2024 Pushkar Vyas. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer