import React from 'react'
import { FaWifi } from 'react-icons/fa'
import chip from '../../../assets/img/chip.png'
import MasterCard from '../../../assets/img/mastercard.svg'
import styles from './CreditCard.module.css'

function CreditCard() {
  return (
  <div className={styles.father}>
    <div className={styles.container}>

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
                <h3 className={styles.cardNumber}>3890 2345 3283</h3>
                <span style={{margin: "10px 0 15px 0"}}>11/24</span>
                <label className={styles.cardName}>Nombre Persona</label>
            </div>

            <div className={styles.masterCard}>
                <img src={MasterCard} alt="" />
            </div>
        </div>

    </div>
    <div className={styles.behind}>
        <div className={styles.bar}></div>
        <span style={{fontSize: "smaller", padding: "10px"}}>
            ICA 3094
        </span>
    </div>
</div>)
}

export default CreditCard