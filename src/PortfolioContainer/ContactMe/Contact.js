import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ScrollUpButton from "react-scroll-up-button";
import emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert'
import './Contact.css';


const Contact = () => {
    function sendMail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_rdvmtzb',
            'template_lhh0oag',
            e.target,
            'CSkJSBQAQsVSE-lvf'
        ).then(res => {
            console.log(res);
            alert("Mail has been sent successfully!")
        }).catch(err => {
            console.log(err);
            alert("Something wrong has happened!")
        });
    }
    return (
        <div className='Contact-section' id='contact'>
            <div className='Contact-section-name'>
                <div className='ternary-text'>
                    {" "}
                    Contact Me
                </div>
                <div className='fourth-text'>
                    {" "}
                    Let's Keep In Touch
                </div>
                <hr className='h6line'></hr>
            </div>
            <div className='Contact-section-details'>
                <div className='row csd'>
                    <div className='col-md-6'>
                        <div className='cname'>
                            EMAIL
                        </div>
                        <div className='name'>
                            trivedidiksha357@gmail.com
                        </div>
                        <div className='cname'>
                            PHONE
                        </div>
                        <div className='name'>
                            +91 8532995987
                        </div>
                        <div className='cname'>
                            ON THE WEB
                        </div>
                        <div className='name'>
                            <div className='cicon'>
                            <a href='https://www.linkedin.com/in/diksha-trivedi-01a6601b1/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                          
                            <a href='https://github.com/diksha1012'>
                                <i className='fa fa-github'></i>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form onSubmit={sendMail}>
                            <div >
                                <label>Name</label>
                                <input type="text" name="user_name" />
                            </div>
                            <div >
                                <label>Email</label>
                                <input type="email" name="user_email" />
                            </div>
                            <div >
                                <label>Message</label>
                                <textarea rows={3} name="message" />
                            </div>
                            <div>
                                <button className='btn btn-outline-light' type='submit' value='Send'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='scroll'>
                    <ScrollUpButton />
                </div>
            </div>

        </div>

    )
}

export default Contact;