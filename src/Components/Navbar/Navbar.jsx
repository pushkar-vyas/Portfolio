import React, { useState } from 'react'
import'./Navbar.css'
// import logo from "../../assets/logo.svg"
// import {AnchorLink} from 'react-anchor-link-smooth-scroll'
// import { useState } from 'react'
// import underline from '../../assets/nav_underline.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import { NavLink ,Link} from 'react-router-dom'
import menu_open from '../../assets/menu_open.svg'
import { GiHamburgerMenu } from "react-icons/gi";

import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react'

const Navbar = () => {
  const[menu,setMenu]=useState("#hero")
  const menuRef = useRef();

  const openMenu =()=>{
    menuRef.current.style.right='10px';
  }

  const closeMenu =()=>{
    menuRef.current.style.right='-360px';
  }

  return (
    <div className='head' id="home">
        <div className="navbar">
            <h2>Pushkar</h2>
            <img src={theme_pattern}/>
            <GiHamburgerMenu className='nav-mob-open' onClick={openMenu}/>
            {/* <img src={menu_open} className='nav-mob-open' onClick={openMenu}/> */}

            <ul className='nav-menu' ref={menuRef}>
                {/* <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline}/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline}/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline}/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contect'><p onClick={()=>setMenu("contect")}>Contect</p></AnchorLink>{menu==="contect"?<img src={underline}/>:<></>}</li> */}
                
                {/* <NavLink to="/">Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/service'>Services</NavLink>
                <NavLink to='/education'>Portfolio</NavLink>
                <NavLink to='/contect'>Contect</NavLink> */}
                <img src={menu_close} className='nav-mob-close' onClick={closeMenu}/>
                <li>
                <a href="#home" onClick={() => setMenu("#home")}>Home</a></li>
                
                <li>
                <a href="#about" onClick={() => setMenu("#about")}>About</a></li>
                <li>
                <a href="#services" onClick={() => setMenu("#services")}>Services</a></li>
                <li><a href="#work" onClick={() => setMenu("#work")}>Portfolio</a> </li>
                <li><a href="#contect" onClick={() => setMenu("#contect")}>Contect</a></li>
                
                
                
                
            </ul>
            <div className='nav-connect'>
            <a href="#contect" onClick={() => setMenu("#contect")}>
              Connect with me
              </a></div>
        </div>
       
    </div>
  )
}

export default Navbar