import React from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Abilities.css';

export default function Abilities() {
    return (
        <div className='Abilities-section' id='abilities'>
            <div className='Abilities-section-name'>
                <div className='third-text'>
                    {" "}
                    Abilities
                </div>
                <div className='skill-text'>
                    {" "}
                    Skills
                </div>
                <hr className='h2line'></hr>
            </div>
            <div className='Abilities-section-skill'>
                <div className='row ask'>
                    <div className='col-md-6'>
                        <div className='skill-name'>
                            HTML5/ CSS3/ JavaScript
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={85} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='skill-name'>
                            Bootstrap Framework
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={90} />
                        </div>
                    </div>
                </div>
                <div className='row ask'>
                    <div className='col-md-6'>
                        <div className='skill-name'>
                            Django
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={90} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='skill-name'>
                            React JS
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={75} />
                        </div>
                    </div>
                </div>
                <div className='row ask'>
                    <div className='col-md-6'>
                        <div className='skill-name'>
                            Python
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={80} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='skill-name'>
                            C++
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={90} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='skill-name'>
                            DSA
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={80} />
                        </div>
                    </div>
                </div>
                <div className='row ask'>
                    <div className='col-md-6'>
                        <div className='skill-name'>
                            SQL
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={85} />
                        </div>
                    </div>

                </div>

            </div>
            <hr className='aline'></hr>
            <div className='Abilities-section-language'>
                <div className='language-text'>
                    {" "}
                    Languages Known
                </div>
                <hr className='h5line'></hr>
                <div className='row asl'>
                    <div className='col-md-6'>
                        <div className='language-name'>
                            Hindi (Mother Tongue)
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={85} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='language-name'>
                            English (Proficiency Use)
                        </div>
                        <div>
                            <ProgressBar className='pcolor' variant="warning" animated now={80} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}