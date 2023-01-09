import React from 'react'
import MyCardCSS from './MyCard_styles.module.css'
import americanExpress from '../../../assets/img/americanExpressLogo.png'
import MasterCard from '../../../assets/img/masterCard.svg'
import VISA from '../../../assets/img/visa-10.svg'
import Chip from '../../../assets/img/chip-1.png'
import { CgMenuRightAlt } from 'react-icons/all'
import { useContext } from 'react'
import { AccountContext } from '../../../MenuContext/AccountContext'

function MyCard() {
    const {currentCreditCard} = useContext(AccountContext)
    
    console.log(currentCreditCard)
  return (
  <div className={MyCardCSS.father}>
    <div className={MyCardCSS.title}>
        <h3>My Card</h3>
        <span style={{fontSize: "25px",cursor: "pointer"}}>
            <CgMenuRightAlt />
        </span>
    </div>
    <div 
    className={MyCardCSS.container_card}
    style={{backgroundImage: currentCreditCard.styles}}>

        {currentCreditCard.type == 'visa'
        ? 
        <label 
        className={MyCardCSS.visa_container} 
        style={{background: "rgb(229,223,231)", 
        background: "linear-gradient(194deg, rgba(229,223,231,1) 0%, rgba(16,59,208,0.8356384790244222) 100%)"}}>
            <img src={VISA} alt="" style={{width: "60px"}}/>
        </label>
        : currentCreditCard.type == 'mastercard'
        ?
        <label 
        className={MyCardCSS.visa_container} 
        style={{backgroundImage: "linear-gradient( 64.3deg,  rgba(254,122,152,0.81) 17.7%, rgba(255,206,134,1) 64.7%, rgba(172,253,163,0.64) 112.1% )"}}>
            <img src={MasterCard} alt="" style={{width: "60px"}}/>
        </label>
        : currentCreditCard.type == 'americanExpress'
        ?
        <label 
        className={MyCardCSS.visa_container} 
        style={{padding: "0", border: "none"}}>
            <img src={americanExpress} alt="" style={{width: "120px"}}/>
        </label>
        :
        <label 
        className={MyCardCSS.visa_container} 
        style={{padding: "30px", background: "#fff"}}>
            <span style={{width: "60px"}}/>
        </label>
        }

        <div className={MyCardCSS.card}>
            <div className={MyCardCSS.header}>
                <span>
                    <img src={Chip} alt="" className={MyCardCSS.chip}/>
                </span>
                <span>
                    <p>{currentCreditCard.date}</p>
                </span>
            </div>
            
            <div className={MyCardCSS.footer}>
                <div className="total-my-card">
                    <h4 style={{fontSize: "12px", opacity: ".7"}}>Total: </h4>
                    <p>{currentCreditCard.balance}</p>
                </div>
                <div>
                    <h4 style={{fontSize: "12px", opacity: ".7"}}>name-id: </h4>
                    <p>{currentCreditCard.nameId}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default MyCard