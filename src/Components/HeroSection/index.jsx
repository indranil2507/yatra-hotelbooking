import React,{useState} from 'react'
import './HeroSection.css'
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'

const Hero = () => {

    
        const [hover,setHover] = useState(false)
    
        const onHover = ()=>{
            setHover(!hover)
        }

    return (
        <>
        <div className="content-wrapper">
            <div className="hero-img">
                <img src="/images/travel.svg" alt="travel"></img>
            </div>
            <div className="hero-content">
                <div className="hero-heading">
                    Book Hotels with One-click
                </div>
                <div className="hero-p">
                    Sign up for a new account today and receive $250 in 
                    credit towards your 
                    next payment
                </div>
                <div className="hero-btn" onMouseEnter={onHover} onMouseLeave={onHover}>
                    <button>
                    Get started {hover ? <MdArrowForward/> : <MdKeyboardArrowRight/>}
                    </button>
                </div>
            </div>
        </div>
           
        </>
    )
}

export default Hero
