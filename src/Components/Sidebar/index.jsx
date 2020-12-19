import React from 'react'
import './Sidebar.css'
import {FaTimes, } from 'react-icons/fa'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
        <div className={isOpen ? 'side-bar-active':'side-bar'}>
            
            <div className="close-icon" onClick={toggle}>
                <FaTimes/>
            </div>
            <div className="side-menu">
                <div className="side-item">
                    <div className="side-link">
                        About
                    </div>
                </div>
                <div className="side-item">
                    <div className="side-link">
                        Facilities
                    </div>
                </div>
                <div className="side-item">
                    <div className="side-link">
                        Rooms
                    </div>
                </div>

            </div>
            <div className="sidebar-buttons">
                <button>Sign-Up</button>
                <button>Log-In</button>
            </div>

        </div>
            
        </>
    )
}

export default Sidebar
