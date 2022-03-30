import React from 'react'
import Countdown from 'react-countdown'

const HyperVault = () => {
  const renderer = ({days, hours, minutes, seconds, completed })=>{
    return(
      <p className='time'><span>{`${days}`}</span> : <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span></p>
    )
  }
  return (
    <div className="hyper_vault">
        <div className="vault_balance">
            <p className='vault_balance_title'>Your Vault Balance</p>
            <p className='vault_balance_value'>$1000</p>
        </div>
        <div className="locked_amount">
            <p className="locked_amount_heading">TOTAL LOCKED TOKEN AMOUNT : 5000</p>
            <div className="countdownTimer">
                <Countdown
                  date={Date.now() + 865000000}
                  renderer = {renderer}
                />
            </div>
            <div className="increase_apy_rate">
                <div className="increase_apy_rate_heading">Increased APY rate :  <span style={{color : "#24D5A9"}}>1,016,088.893%</span></div>
                <p>Token Amount to lok</p>  
                <input type="text" placeholder="0.0"/><br/><br/>
                <button>Lock</button>
            </div>
        </div>
    </div>
  )
}

export default HyperVault