import React from 'react'
import "./Header.css";

// import Header from "./Components/Header";
// import Amenities from "./Amenities";
// import Testimonials from "./Testimonials";
// import Contact from './Contact';
// import Footer from "./Footer";

// import {
//     BrowserRouter as Router,
//     Route 
// } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
    return (
       
        <div id = "Home" className="App-header">
            <div className='nav'>
                {/* <a href="#Home">HOME</a>
                <a href="#Services">SERVICES</a>
                <a href="#Testimonials" >TESTIMONIALS</a>
                <a href="#Contact">CONTACT</a> */}
                {/* <Link to="/" className="">HOME</Link> */}
                <Link to="/Amenities" className="">SERVICES</Link>
                <Link to="/Testimonials" className="">TESTIMONIALS</Link>
                <Link to="/Contact" className="">CONTACT </Link>
                
            </div>
            
      
                <Link to="/create" className="checkin">Check In </Link>
                
            <div className="welcomepage">
                <h1 style={{color:"navy"}}>ANU'S BEAUTY STUDIO</h1>
               
            </div>
        </div>
       
    )
}

export default Header
