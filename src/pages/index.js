import React,{useState} from 'react'
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
        </div>
    )
}

export default Home
