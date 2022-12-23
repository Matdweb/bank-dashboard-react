import React from 'react'
import TransactionCSS from './Transactions_styles.module.css'
import { GiFamilyTree } from 'react-icons/all'
import { FaMedrt } from 'react-icons/all'
import { FaMap } from 'react-icons/all'
import { FaMendeley }from 'react-icons/all'
import { FaMailchimp }from 'react-icons/all'

const icons = [<GiFamilyTree/>,<FaMedrt/>,<FaMap/>,<FaMendeley/>,<FaMailchimp/>]


function Transaction({img,place,date,amount}) {
  return (
    <div className={TransactionCSS.transaction}>
      <span className={TransactionCSS.transaction_icon}>
        {icons[img]}
      </span>
        <span className={TransactionCSS.transaction_info}>
            <span style={{fontSize: "12px"}}>
                <h5 className={TransactionCSS.place}>{place}</h5>
                <p>{date}</p>
            </span>
            <label className={TransactionCSS.amount}>${amount}</label>
        </span>
    </div>
  )
}

export default Transaction