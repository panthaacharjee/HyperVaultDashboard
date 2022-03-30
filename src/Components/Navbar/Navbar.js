import React from 'react'
import {GrCircleInformation} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const Navbar = ({ sidebar, set}) => {
  const openSidebar = ()=>{
    set(!sidebar)
  }
  return (
    <div className="navbar">
        <p><GrCircleInformation/></p>
        <div className='logo'>
            <p>Titano <sub> $0.1964 </sub> USD</p>
        </div>
        <Link to="#">Connect Wallet</Link>
        <button onClick={openSidebar}><FaBars/></button>
    </div>
  )
}

export default Navbar