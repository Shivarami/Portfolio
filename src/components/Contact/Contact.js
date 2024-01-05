import React,{useState,useRef} from 'react';
import './Contact.css';
import Walmart from '../../Assets/walmart.png'
import Adobe from '../../Assets/adobe.png'
import Microsoft from '../../Assets/microsoft.png'
import Facebook from '../../Assets/microsoft.png'
import FacebookIcon from '../../Assets/facebook-icon.png'
import TwitterIcon from '../../Assets/twitter.png'
import Youtube from '../../Assets/youtube.png'
import Insta from '../../Assets/instagram.png'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s7tzwib', 'template_ftwqrgg', form.current, 'kI6hjkYYP8dW2P4Fo')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !')

          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportinites</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name="message"rows="5" placeholder='your message'></textarea>
                <button type='submit' value='Send' className="submitbtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="" className="link" />
                    <img src={TwitterIcon} alt="" className="link" />
                    <img src={Insta} alt="" className="link" />
                    <img src={Youtube} alt="" className="link" />
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;
