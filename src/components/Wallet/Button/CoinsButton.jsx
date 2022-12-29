import React from 'react'
import { BsCheckCircleFill, IoIosArrowDown } from 'react-icons/all'
import { Divider } from '@chakra-ui/react'
import styles from './CoinsButton.module.css'
import Bitcoin from '../../../assets/img/bitcoin.png'
import Coin from '../../../assets/img/coin.png'

//This component can either work as a buttom with a center content or it could work as more complex button with the propiet information

function CoinsButton({content}) {
  
  { if (content.value != undefined) { return (
    <label className={styles.container}>
      <p>{content.value}</p>
      <Divider orientation='vertical' marginLeft='50px' />
      <span>
        <div className={styles.container_type_coin}>
          <img src={Bitcoin} style={{width: '17px'}}/>
          <p>{content.coin}</p> 
          <IoIosArrowDown />
        </div>
      </span>
    </label>
  )} else{ return (
    <label className={styles.container}>
      <span style={{fontWeight: "bolder"}}>
        {content.text}
      </span>
    </label>
  )}}
}

export default CoinsButton