import React from 'react'
import {GrCircleInformation} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <p><GrCircleInformation/></p>
        <div className='logo'>
            <p>Titano <sub> $0.1964 </sub> USD</p>
        </div>
        <Link to="#">Connect Wallet</Link>
    </div>
  )
}

export default Navbar