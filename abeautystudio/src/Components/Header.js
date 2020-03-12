import React from 'react'
import "./Header.css";

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
            
            
            <div>
                <h1 style={{color:"blue"}}>ANU'S BEAUTY STUDIO</h1>
            </div>
            
        </div>
    )
}

export default Header
