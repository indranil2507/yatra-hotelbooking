import React,{useState} from 'react'
import Hero from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Home = () => {
    const [isOpen,setIsOpen]= useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Hero/>
        </div>
    )
}

export default Home
