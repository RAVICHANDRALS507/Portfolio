import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  //email
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "223b03c7-6bbc-4943-a63f-d3ced0872e7c");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          // setResult("Form Submitted Successfullly");
          alert(res.message);
          event.target.reset();
        } else {
          // console.log("Error", data);
          // setResult(data.message);
          alert(res.message);
        }
      };


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>cravi7715@gmil.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+91 7892968904</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Bangalore Karnataka</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit}
        className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email'/>
            <label htmlFor="">Your Message</label>
            <textarea name="message" rows="8" placeholder='Describe your message'></textarea>
            <button className="contact-submit" type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
