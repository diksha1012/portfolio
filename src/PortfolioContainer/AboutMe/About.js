import React from 'react'
import Card from 'react-bootstrap/Card'
import './About.css';

export default function About() {
    return (
        <div className='about-section' id='about'>
            <div className='about-section-name'>
                <div className='secondary-text'>
                    {" "}
                    About Me
                </div>
                <div className='prmary-text'>
                    {" "}
                    Why Choose Me?
                </div>
                <hr className='line'></hr>
            </div>
            <div className='about-section-details'>
                <div className='row asd'>
                    <div className='col-md-6 about-picture'>
                        <div className='about-picture-background'>
                        </div>
                    </div>
                    <div className='col-md-6 dnk'>
                        <div className='description'>
                            <span className=''>
                                I'm an experienced web developer holding strong interest in
                                django Framework. I'm always keen on learning
                                new skills about designing and have potential to create some
                                eye catchy creatives and designs with ease.
                                Apart from this I can also adapt quickly in diȋerent work
                                environment.
                            </span>
                        </div>
                        <div className='key-points'>
                            <span className='high'> Here are a Few Highlights </span>
                            <ul>
                                <li>HTML5, CSS3, JavaScript</li>
                                <li>Bootstrap Framework</li>
                                <li>Django</li>
                                <li>React JS</li>
                                <li>Python</li>
                                <li>DSA</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}