import React from 'react'
import { FaSearch } from 'react-icons/fa'
import MyCard from '../MyCard/MyCard'
import Categories from '../Categories/Categories'
import ListContacts from '../Contacts/ListContacts'
import Transactions from '../Transactions/Transactions'
import DashboardCSS from'./DashBoard_styles.module.css'

function DashBoard() {
  return (
    <div className={DashboardCSS.father}>
        <div className={DashboardCSS.container_title}>
            <h2 className={DashboardCSS.title}>Welcome Client</h2>
            <span className={DashboardCSS.search}>
                <input type="text" placeholder='Search' className={DashboardCSS.search_input}/>
                <FaSearch style={{cursor: "pointer"}} />
            </span>
        </div>
        <MyCard />
        <Categories />
        <ListContacts />
        <Transactions />
    </div>
  )
}

export default DashBoard