import React from 'react'
import CategoryCSS from './Categories_styles.module.css'
import { BiTransfer } from 'react-icons/all'
import { FaWallet } from 'react-icons/all'
import { FaCarAlt } from 'react-icons/all'

const icons = [<BiTransfer />,<FaWallet />,<FaCarAlt />]

function CategoryCard({icon,action,amount}) {
  return (
    <div className={CategoryCSS.card}>
            <label className={CategoryCSS.card_img}>
              {icons[icon]}
            </label>
            <span className={CategoryCSS.card_text}>
                <p>{action}</p>
                <label className={CategoryCSS.amount}>${amount}</label>
            </span>
        </div>
  )
}

export default CategoryCard