import React from 'react'
import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
    return (
        <div id = "Home" className="App-header">
            <div className='nav'>
                <a href="#Home">HOME</a>
                <a href="#Services">SERVICES</a>
                <a href="#Testimonials" >TESTIMONIALS</a>
                <a href="#Contact">CONTACT</a>
            </div>
            
                <Link to="/create" className="checkin">Check In </Link>
            
            <div className="welcomepage">
                <h1 style={{color:"navy"}}>ANU'S BEAUTY STUDIO</h1>
               
            </div>
            
        </div>
    )
}

export default Header
