import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './nav.css'

function Nav() {
  const getColorStyles = () => {
    return {
      color: '#01D293',
    };
  };

  useEffect(() => {
    // Initialize Alpine.js for handling the mobile menu
    window.Alpine.start();
  }, []);

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="ml-3 text-xl umersohail">
              <span style={getColorStyles()}>U</span>MER <span style={getColorStyles()}>S</span>OHAIL
            </div>
          </Link>

          {/* Hamburger menu icon for small screens */}
          <button
            x-data="{ open: false }"
            onClick={() => (document.getElementById('nav-menu').style.display = 'block')}
            className="md:hidden bg-gray-200 p-2 rounded"
          >
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Navigation menu for large screens */}
          <nav className="hidden md:flex md:ml-auto md:items-center md:w-auto nav" id="nav-menu">
            <Link to="/home" className="mr-5 hover:text-gray-900">Home</Link>
            <Link to='/courses' className="mr-5 hover:text-gray-900">Courses</Link>
            <a href="http://localhost:3000/reglogin" className="mr-5 hover:text-gray-900">Registration</a>
            <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
            <a href='http://localhost:3000/login' className="mr-5 hover:text-gray-900">Sign In</a>
          </nav>

          {/* Social media icons */}
          <div className="fp inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <div className='fp'>
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
      </header>
    </>
  );
}

export default Nav;
