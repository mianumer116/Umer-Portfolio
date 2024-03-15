
import React, { useState, useEffect, useRef } from 'react';
import './terminal.css';

function Terminal() {
  const [isVisible, setIsVisible] = useState(false);
  const terminalRef = useRef(null);
  const col={
    border:"solid",
    borderColor:'white',
    marginTop:'100px',
    padding:'80px',
    height:'400px'
  
  }
  useEffect(() => {
    const handleScroll = () => {
      if (!terminalRef.current) return;
      const { top, bottom } = terminalRef.current.getBoundingClientRect();
      setIsVisible(top < window.innerHeight && bottom >= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={terminalRef} className={`bla ${isVisible ? 'fade-in' : ''}`} style={col}>
        <h1 className='bdg'>---Terminal</h1>
        <div className="grid lg:grid-cols-1 ba">
          <div className="index_consoleCtrl__DI2H1 index_close__XGN9U"></div>
          <p>Welcome to my website! Get started by typing `help` command below</p>
          <p>
            <span className="green-text">$ UmerSohail-dev</span>
            <span className="blinking-cursor s">|</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Terminal;
