// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Corrected import
import './footer.css';

function Footer() {
    return (
        <>
            <div className="grid lg:grid-cols-2 footer">
                <div className="f">
                    <h1 className='ff bssg'>Connect with me</h1>
                    <h1 className='bssg'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#01D293' }} /> Planet Earth
                    </h1>
                    <p className='bssg'>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#01D293' }} /> umersohail.dev@gmail.com
                    </p>
                    <div className="jj inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        <div className='jj '>
                            <a className='x' href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: 'red' }} />
                            </a>

                            <a className='x' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#1877f2' }} />
                            </a>

                            <a className='x' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0077b5' }} />
                            </a>

                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'black' }} />
                            </a>
                        </div>
                    </div>

                </div>
                <div className='boxoh'>
                <form action="mailto:" method="post" enctype="text/plain">

                   
                    <div>
                        <h1 className='test'>---Contact with me</h1>
                        <input className='fg' placeholder="Your Full Name" />
                        <input className='fg' placeholder="Your Email" />
                        <textarea name="message" className='kh fg' rows="4" colmns="22">
                            Your Message Here
                        </textarea>
                        <button type="submit" class=" ip text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Email</button>


                    </div>
                    </form>



                </div >
            </div >

            <div className='last'>
                <p>© Copyright 2024 - Developed by Umer Sohail. All right reserved.</p>

            </div>
        </>
    );
}

export default Footer;
