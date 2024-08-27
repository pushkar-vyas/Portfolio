import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contect from './Components/Contect/Contect'
import Footer from './Components/Footer/Footer'
import Education from './Components/Qulification/Education'
import Non from './Components/Non'


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}

      {/* <Routes> */}
        {/* <Route path='/' element={<Non/>}></Route> */}
        {/* <Route path='' element={<Hero/>}></Route> */}
        {/* <Route path='/about' element={<About/>}></Route> */}
        {/* <Route path='/service' element={<Services/>}></Route> */}
        {/* <Route path='/education' element={<Education/>}></Route> */}
        {/* <Route path='/work' element={<MyWork/>}></Route> */}
        {/* <Route path='/contect' element={<Contect/>}></Route> */}
        {/* <Route path='/footer' element={<Footer/>}></Route> */}
      {/* </Routes> */}
      
      {/* <Footer/> */}

      {/* {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Services/>
      <Education/>
      <MyWork/>
      <Contect/>
      <Footer/>

       
    </div>
  )
}

export default App