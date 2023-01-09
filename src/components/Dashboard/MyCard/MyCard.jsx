import React from 'react'
import MyCardCSS from './MyCard_styles.module.css'
import americanExpress from '../../../assets/img/americanExpressLogo.png'
import MasterCard from '../../../assets/img/masterCard.svg'
import VISA from '../../../assets/img/visa-10.svg'
import Chip from '../../../assets/img/chip-1.png'
import { CgMenuRightAlt } from 'react-icons/all'

function MyCard() {
  return (
  <div className={MyCardCSS.father}>
    <div className={MyCardCSS.title}>
        <h3>My Card</h3>
        <span style={{fontSize: "25px",cursor: "pointer"}}>
            <CgMenuRightAlt />
        </span>
    </div>
    <div className={MyCardCSS.container_card}>
        <label 
        className={MyCardCSS.visa_container} 
        style={{background: "rgb(229,223,231)", 
        background: "linear-gradient(194deg, rgba(229,223,231,1) 0%, rgba(16,59,208,0.8356384790244222) 100%)"}}>
            <img src={VISA} alt="" style={{width: "60px"}}/>
        </label>
        <div className={MyCardCSS.card}>
            <div className={MyCardCSS.header}>
                <span>
                    <img src={Chip} alt="" className={MyCardCSS.chip}/>
                </span>
                <span>
                    <p>02/24</p>
                </span>
            </div>
            
            <div className={MyCardCSS.footer}>
                <div className="total-my-card">
                    <h4 style={{fontSize: "20px"}}>Total: </h4>
                    <p>$2 000 000</p>
                </div>
                <div>
                    <h4>name-id: </h4>
                    <p>MaKR2</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default MyCard