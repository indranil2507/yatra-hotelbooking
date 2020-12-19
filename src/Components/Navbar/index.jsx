import React from 'react'
import './Navbar.css'
import {FaBars, FaHotel} from 'react-icons/fa'
const Navbar = () => {
    return (
        <>
        <div className="nav">
            <div className="nav-logo">
                <FaHotel/>{" "}Yatra
            </div>
            <div className="mobile-icon">
                <FaBars/>
            </div>
            <div className="nav-menu">
                <div className="nav-item">
                    <div className="nav-link">
                        About
                    </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link">
                        Facilities
                    </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link">
                        Rooms
                    </div>
                </div>

            </div>
            <div className="nav-buttons">
                <button>Sign-Up</button>
                <button>Log-In</button>
            </div>

        </div>
            
        </>
    )
}

export default Navbar
