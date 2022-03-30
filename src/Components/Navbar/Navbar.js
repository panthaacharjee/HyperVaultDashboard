import React from 'react'
import {GrCircleInformation} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import NavLogo from '../Images/navLogo.png'

const Navbar = ({ sidebar, set}) => {
  const openSidebar = ()=>{
    set(!sidebar)
  }
  return (
    <div className="navbar">
        <img src={NavLogo} alt={NavLogo}/>

            <p>HyperVault <span>$0.1964</span> USD</p>

        <Link to="#">Connect Wallet</Link>
        <button onClick={openSidebar}><FaBars/></button>
    </div>
  )
}

export default Navbar