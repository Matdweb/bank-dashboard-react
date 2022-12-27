import React from 'react'
import images from '../../../assets/exports/ContacList'
import ContactCSS from './ListContacts_styles.module.css'


function Contact({img,name,date,amount}) {
  return (
    <div className={ContactCSS.contact}>
        <img className={ContactCSS.contact_img} src={images[img]} />
        <span className={ContactCSS.contact_info}>
            <span style={{fontSize: "12px"}}>
                <h5 className={ContactCSS.name}>{name}</h5>
                <p>{date}</p>
            </span>
            <label
            style={{fontSize: "14px", 
            fontWeight: "bolder"}}>
              ${amount}
            </label>
        </span>
    </div>
  )
}

export default Contact