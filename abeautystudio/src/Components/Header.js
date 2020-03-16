import React from 'react'
import "./Header.css";
// import bikini from "./images/first-bikini-wax.jpg";

function Header() {
    return (
        <div className="App-header">
            <div className='nav'>
                <a href="#Home">HOME</a>
                <a href="#Services">SERVICES</a>
                <a href="#Gallery">GALLERY</a>
                <a href="#Contact">CONTACT</a>
            </div>
            
                <button className="checkin">Check In</button>
            
            <div className="welcomepage">
                <h1 style={{color:"navy"}}>ANU'S BEAUTY STUDIO</h1>
                {/* <img src={bikini} alt="attractive" /> */}
            </div>
            
        </div>
    )
}

export default Header
