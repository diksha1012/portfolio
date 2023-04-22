import React from 'react'
import Card from 'react-bootstrap/Card'
import './Experiences.css';

export default function Experiences() {
    return (
        
            <div className='Experiences-section' id='experiences'>
                <div className='Experiences-section-name'>
                    <div className='second-text'>
                        {" "}
                        Experiences
                    </div>
                    <div className='edu-text'>
                        {" "}
                        Education
                    </div>
                    <hr className='hline'></hr>
                </div>
                <div className='Experiences-section-edu'>
                    <div className='row ese'>
                        <div className='col-md-6'>
                            <div className='ed-text'>
                                {" "}
                                ABES Engineering College, Ghaziabad
                            </div>
                            <div className='du-text'>
                                {" "}
                                2019 - Present
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='ed-text'>
                                {" "}
                                Bachelor of Technology focused in Information Technology
                            </div>
                            <div className='du-text'>
                                {" "}
                                <i class="fa fa-map-marker"></i>  Ghaziabad, Uttar Pradesh
                            </div>
                        </div>
                    </div>
                    <div className='row ese'>
                        <div className='col-md-6'>
                            <div className='ed-text'>
                                {" "}
                                Kendriya Vidyalaya IIFCO
                            </div>
                            <div className='du-text'>
                                {" "}
                                2018 - 2019
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='ed-text'>
                                {" "}
                                Intermediate - PCM with CS (CBSE BOARD)
                            </div>
                            <div className='du-text'>
                                {" "}
                                <i class="fa fa-map-marker"></i>   Bareilly, Uttar Pradesh
                            </div>

                        </div>
                    </div>
                    <div className='row ese'>
                        <div className='col-md-6'>
                            <div className='ed-text'>
                                {" "}
                                Bishop Conrad Snr. Secondary School 
                            </div>
                            <div className='du-text'>
                                {" "}
                                2016 - 2017
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='ed-text'>
                                {" "}
                                High School (CBSE BOARD)
                            </div>
                            <div className='du-text'>
                                {" "}
                                <i class="fa fa-map-marker"></i>  Bareilly, Uttar Pradesh
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='eline'></hr>
                <div className='Experiences-section-career'>
                    <div className='career-text'>
                        {" "}
                        Career
                    </div>
                    <hr className='h1line'></hr>
                    <div className='row ese'>
                        <div className='col-md-6'>
                            <div className='ed-text'>
                                {" "}
                                ABES College Startup
                            </div>
                            <div className='du-text'>
                                {" "}
                                August'21 - September'21
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='ed-text'>
                                {" "}
                                Web Developer intern
                            </div>
                            <div className='du-text'>
                                {" "}
                                <i class="fa fa-map-marker"></i>  Offline
                            </div>
                        </div>
                    </div>

                </div>
            </div>
      
    )
}