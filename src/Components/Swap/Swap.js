import React from 'react'
import SwapLogo from '../Images/SwapLogo.png'
import Settings from '../Images/Settings.png'
import Reverse from '../Images/Reverse.png'
import Next from '../Images/Next.png'
import BNB from '../Images/BNB.png'
import HyperVault from '../Images/HyperVault.png'
import icon from '../Images/icon.png'
import Arrow from '../Images/Arrow.png'

const Swap = () => {
  return (
    <div className="swap">
        <div className="swap_logo">
           <div className='swap_logo_box'>
                {/* <img src={SwapLogo} alt="" /> */}
                <div className="swap_box">
                    <p className="swap_heading">Swap</p>
                    <img src={Settings} alt="" />
                    <img src={Reverse} alt="" />
                    <img src={Next} alt="" />
                </div>
           </div>
            <p>Trade tokens in an instant</p>
            
        </div>
        <div className="input_box">
           <div style={{display:"flex", flexDirection:"column"}}>  
               <div className='Bnb'>
                   <div style={{width:"100%", display:"flex", alignItems: "center"}}>
                        <img src={BNB} alt=""/>
                        <select>
                            <option value="BNB">BNB</option>
                            <option value="HyperVault">HyperVault</option>
                        </select>
                   </div>
                    <button>Max</button>
               </div>
               <div className='box_input'>
                    <input type="text" placeholder="0.0"/>
               </div>
           </div>
           <div style={{display:"flex", justifyContent:"center", cursor:"pointer", marginBottom:"20px"}}><img src={Arrow} alt=""/></div>
           <div style={{display:'flex', flexDirection:"column"}}>
               <div className="Vault">
                    <img src={HyperVault} alt=""/>
                    <select>
                        <option value="HyperVault">HyperVault</option>
                        <option value="BNB">BNB</option>
                    </select>
                    <img className='icon' src={icon} alt=""/><br/>
               </div>
                <div className='box_input'>
                    <input type="text" placeholder="0.0"/>
               </div>
           </div>
           <div className="slippage_tollarance">
               <p>Slippage Tollarance</p><span>0.5%</span>
            </div>
            <button className='hyperswap_button'>Swap</button>
        </div>
    </div>
  )
}

export default Swap