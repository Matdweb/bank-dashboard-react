import { background } from '@chakra-ui/react'
import React from 'react'
import { FaWifi } from 'react-icons/fa'
import chip from '../../../assets/img/chip.png'
import MasterCard from '../../../assets/img/mastercard.svg'
import americanExpress from '../../../assets/img/americanExpressLogo.png'
import VISA from '../../../assets/img/visa-white.svg'
import styles from './CreditCard.module.css'

function CreditCard({ locked, data }) {
    console.log(data.styles)
  return (
  <div className={styles.father}>
    <div className={styles.container} style={{backgroundImage: data.styles}}>

        <div className={styles.header}>
            <h1 style={{fontWeight: "lighter"}}>Credit Card</h1>
            <span className={styles.network}>
                <FaWifi />
            </span>
        </div>

        <div className={styles.chip}>
            <img src={chip} style={{width: "60px"}} />
        </div>

        <div className={styles.cardContent}>
            <div className={styles.cardInfo}>
                {locked == false
                ? <>
                    <h3 className={styles.cardNumber}>{data.number}</h3>
                    <span style={{margin: "10px 0 15px 0"}}>{data.date}</span>
                    <label className={styles.cardName}>{data.name}</label>
                </>
                : <>
                    <h3 className={styles.cardNumber}>**** **** {data.number.slice(-4)}</h3>
                    <span style={{margin: "10px 0 15px 0"}}> </span>
                    <label className={styles.cardName}>{data.name}</label>
                </>
                }
                
            </div>

            {data.type == 'visa'
            ?
            <div className={styles.type}>
                <img src={VISA} alt="" style={{marginTop: "40px"}} />
            </div>
            : data.type == 'mastercard'
            ?
            <div className={styles.type}>
                <img src={MasterCard} alt="" />
            </div>
            : data.type == 'americanExpress'
            ?
            <div className={styles.type} style={{width: "130px"}}>
                <img src={americanExpress} alt="" style={{transform: "translateY(10px)"}} />
            </div>
            :
            <div className={styles.type}>
                <img src={MasterCard} alt="" />
            </div>}
        </div>

    </div>
    <div className={styles.behind} style={{backgroundImage: data.styles}}>
        <div className={styles.bar}></div>
        <span style={{fontSize: "smaller", padding: "10px"}}>
           ICA {data.ica}
        </span>
    </div>
</div>)
}

export default CreditCard