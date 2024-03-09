
import './terminal.css';

function Terminal() {
const col={
  border:"solid",
  borderColor:'white',
  marginTop:'100px',
  paddig:'80px',
  height:'400px'

}

  return (
    <>
      <div className='bla' style={col}>
        <h1 className='bdg'>---Terminal</h1>
        <div className="grid lg:grid-cols-1 ba">
          <div className="index_consoleCtrl__DI2H1 index_close__XGN9U"></div>
          <p>Welcome to my website! Get started by typing `help` command below</p>
          <p>
            <span className="green-text">$ UmerSohail-dev</span>
            <span className="blinking-cursor s">
              |
            </span>
          </p>
          

        </div>
      </div>

    </>
  );
}

export default Terminal;
