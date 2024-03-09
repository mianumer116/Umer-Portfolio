import React,{useState,useEffect} from 'react'
import './terminal.css';

function Terminal() {

const[help,sethelp]=useState('')
const helps=(e)=>{
  sethelp(e.target.value)

}
  return (
    <>
      <div className='bla'>
        <h1 className='bdg'>---Terminal</h1>
        <div className="grid lg:grid-cols-1 ba">
          <div className="index_consoleCtrl__DI2H1 index_close__XGN9U"></div>
          <p>Welcome to my website! Get started by typing `help` command below</p>
          <p>
            <span className="green-text">$ UmerSohail-dev</span>
            <span className="blinking-cursor s">
              <input  className="if" value={help} onChange={helps} /> |
            </span>
          </p>
          <div className=""></div>
          <form action="http://localhost:3000/help" >
            <input  name={help} className="gsv"/>

          <button type="submit"  className='fdsa'>HELP</button>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default Terminal;
