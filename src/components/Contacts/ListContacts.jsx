import React from 'react'
import Contact from './Contact'
import ContactsCSS from './ListContacts_styles.module.css'
import { CgMenuRightAlt } from 'react-icons/all'

function ListContacts() {
    const contacts = [{
        img: 0,
        name: "Jhon Philipzen",
        date: "Abril 28, 2022",
        amount: "140.00"
    },{
        img: 2,
        name: "Pamela Xintzki",
        date: "March 8, 2022",
        amount: "200.00"
    },{
        img: 1,
        name: "Andres Andrew",
        date: "Feb 30, 2022",
        amount: "180.00"
    },{
        img: 0,
        name: "Matias Maddison",
        date: "Nov 28, 2022",
        amount: "220.00"
    }]
  return (
    <div className={ContactsCSS.father}>
    <div className={ContactsCSS.title}>
        <h3>Contacts</h3>
        <span className={ContactsCSS.right_menu}>
            <CgMenuRightAlt />
        </span>
    </div>
    <div className={ContactsCSS.contacts}>
        {contacts.map((contact,index)=>{
            return (
                <Contact 
                img={contact.img}
                name={contact.name}
                date={contact.date}
                amount={contact.amount}
                key={index}
                />
            ) 
        })}
    </div>
  </div>
  )
}

export default ListContacts