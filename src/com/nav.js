import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'

function Nav() {
  const getColorStyles = () => {
    return {
      color: '#01D293',
    };
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">


            <div className="ml-3 text-xl umersohail">
              <span style={getColorStyles()}>U</span>MER <span style={getColorStyles()}>S</span>OHAIL
            </div>

          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center nav">
            <Link to="/home" class="mr-5 hover:text-gray-900">Home</Link>
            <Link to='/courses' class="mr-5 hover:text-gray-900">Cources</Link>
          <form action='http://localhost:3000/reglogin' metod=''>

            <a href="http://localhost:3000/reglogin" class="mr-5 hover:text-gray-900">Registeration</a>
          </form>
          
            <Link to="/contact" class="mr-5 hover:text-gray-900">Contact </Link>
            <form action="http://localhost:3000/login">

            <a href='http://localhost:3000/login' class="mr-5 hover:text-gray-900">Sign In </a>
            </form>

          </nav>
          <div className="fp inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <div className='fp'>
              <a className='x' href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: 'red' }}  />
              </a>

              <a className='x' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#1877f2' }} />
              </a>

              {/* Add more social media icons as needed */}
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
  )
}

export default Nav;