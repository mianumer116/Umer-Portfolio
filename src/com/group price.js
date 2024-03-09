import './groupprice.css'
function Group() {
   
    const div={
        display:'flex',
        justifyContent:'center'
    }
    return (
        <>
        <div style={div}> 

        
        <h1 className="gjf">GROUP JOINING FEES</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-5" >
            
            <div class="bgr">
                <h1 className='fg'>MONHLY PACKAGE</h1>
                <ul className='lgs'>
                    <li>Trading Course</li>
                    <li>MERN stack </li>
                    <li>Trading Signals</li>
                    <li>Price 5$ </li>
                    <li>Subscription Time 30 Days</li>
                </ul>

            </div>
            <div className="bgr">
           

               
                <h1 className='fg'>Yearly Package</h1>
               
                <ul className="lgs">
                    <li>Trading Course</li>
                    <li>MERN stack</li>
                    <li>Trading Signals</li>
                    <li>Price 50$</li>
                    <li>Subscription Time 1 Year</li>
                    <li>Personal Chat Guidlines</li>
                </ul>

            </div>
            

        </div>
        </>
       

    )
}
export default Group