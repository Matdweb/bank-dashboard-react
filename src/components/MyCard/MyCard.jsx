import React from 'react'
import MyCardCSS from './MyCard_styles.module.css'
import VISAimg from '../../assets/img/visa-10.svg'
import Chip from '../../assets/img/chip-1.png'
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
        <label className={MyCardCSS.visa_container}>
            <img src={VISAimg} alt="" style={{width: "60px"}}/>
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