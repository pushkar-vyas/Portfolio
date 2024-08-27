import React from 'react'
import './Contect.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_lcon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contect = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b42766e9-726e-4de8-8405-3b855560fab2");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("Success",res);
        }
      };
  return (
    <div>
        <div  className="contect" id='contect' >
            <div className="contect-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern}/>
            </div>
            <div className="contact-section">
                <div className="contect-left">
                    <h1>Let's talk</h1>
                    {/* <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p> */}
                    <div className="contect-details">
                        <div className="contect-detail">
                            <img src={mail_icon}/><p>pushkarvyas204@gmail.com</p>

                        </div>
                        <div className="contect-detail">
                            <img src={call_icon}/><p>6264287351</p>

                        </div>
                        <div className="contect-detail">
                            <img src={location_lcon}/><p>Dewas, M.P.</p>

                        </div>
                        

                    </div>
                    
                </div>
                <form onSubmit={onSubmit} className="contect-right">
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name'/>

                    <label htmlFor='email'>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email'/>

                    <label htmlFor='message'>Write your message here</label>
                    <input type='message' rows="8" placeholder='Enter your message' name='message'/>

                    <button type='submit' className='contect-submit'> Submit Now</button>
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Contect