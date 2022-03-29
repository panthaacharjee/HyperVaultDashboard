import React from 'react'
import logo from '../Images/Logo.png'
import {NavLink, Link} from 'react-router-dom'
import SidebarData from './SidebarData'


//Social Images
import s1 from '../Images/Social/S1.png'
import s2 from '../Images/Social/S2.png'
import s3 from '../Images/Social/S3.png'
import s4 from '../Images/Social/S4.png'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img src={logo}/>
      <div className="menu">
        {SidebarData.map((val, ind)=>{
          return(
            <div> <NavLink activeClassName="active" to={val.path}><img alt='' src={val.menuIcon}/><p>{val.name}</p></NavLink></div>
          )
        })}
      </div>
      <div className="social">
        <Link to="#"><img src={s1} alt=""/></Link>
        <Link to="#"><img src={s2} alt=""/></Link>
        <Link to="#"><img src={s3} alt=""/></Link>
        <Link to="#"><img src={s4} alt=""/></Link>
      </div>
    </div>
  )
}

export default Sidebar