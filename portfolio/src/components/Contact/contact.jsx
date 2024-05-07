import React from 'react';
import '../../components/Contact/contact.css';
import user from '../../assets/user.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import mail from '../../assets/mail.png'

import insta from '../../assets/insta.png'
import linkedin from '../../assets/linkedin.png'
import gitlogo from '../../assets/gitlogo.png'
import facebok from '../../assets/facebook.png'
import sendicon from '../../assets/send.png'
function Contact() {
    return (
        <>
            <div className="contactheader">
                <div className="title">
                    <h1>Get In  <span className="skillcolor">  Contact</span></h1>
                </div>
            </div>
            <div className='cmain'>
            <div className='contactmain'>
            <div className='contactinfo'>
                    <h1>Conatct Info</h1>
                    <div className='myname'>
                        <img src={user} alt="" />
                        <p>Vijaya Naaraayanan</p>
                    </div>
                    <div className='myname'>
                    <img src={phone} alt="" />
                        <p>+91 8870589444</p>
                    </div>
                    <div className='myname'>
                    <img src={mail} alt="" />
                        <p>vijaybalaram05@gmail.com</p>
                    </div>
                    <div className='myname'>
                    <img src={location} alt="" /> 
                    <p>Coimbatore, TamilNadu, India.</p>
                    </div>
                </div>
                <div className='contactbox'>
                    <div className='context'>
                        <h1>Contact Me</h1>
                        <div className="row">
                            <input type="text" placeholder="Name" className="textbox" />
                            <input type="email" placeholder="Email" className="textbox" />
                        </div>

                        
                        <div className="row">
                            <input type="text" placeholder="Subject" className="textbox" />
                        </div>

                      
                        <div className="row">
                            <textarea placeholder="Message" className="textbox" rows="4" />
                        </div>
                        <div className='send'>
                            <a href="">Send</a>
                            <img src={sendicon} alt="" />
                    </div>
                    </div>
                    
                </div>
                
            </div>
            </div>
            <div className='socialmedia'>
                <div className='socialicons'>
                    <img src={insta} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={gitlogo} alt="" />
                    <img src={facebok} alt="" />
                </div>
            </div>
           
        </>
    );
}

export default Contact;
