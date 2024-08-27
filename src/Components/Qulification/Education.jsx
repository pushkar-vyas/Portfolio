import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Education.css'

const Education = () => {
  return (
    <div>
        <div id='education' className='education'>
            <div className="education-title">
                <h1>Qualification</h1>
                <img src={theme_pattern}/>
            </div>
            <div className='education-j'><h1>My Education Journey</h1></div>
            <div className='education-history'>
            <div className='education-now'>
                <h1>MCA</h1>
                <p>RGPV-University</p>
                <p>2022 - present</p>
            </div>

            <div className='education-now'>
                <h1>BSC <br></br><span>(Maths)</span></h1>
                <p>Vikram University</p>
                <p>2019 - 2022</p>
            </div>

            <div className='education-now'>
                <h1>12th (Maths)</h1>
                <p>MP Board</p>
                <p>2018 - 2019</p>
            </div>

            <div className='education-now'>
                <h1>10th</h1>
                <p>Vikram University</p>
                <p>2016 - 2017</p>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Education