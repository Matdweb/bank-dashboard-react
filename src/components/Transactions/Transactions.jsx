import React from 'react'
import Transaction from './Transaction'
import TransactionsCSS from './Transactions_styles.module.css'

// Chakra components
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'

  import { IoIosArrowDown } from 'react-icons/all'

function Transactions() {
    const transactions = [{
        icon: 0,
        place: "Ikine Houses",
        date: "Abril 28, 2022 at 9:00",
        amount: "140.00"
    },{
        icon: 2,
        place: "Restaurant",
        date: "March 8, 2022 at 22:00",
        amount: "200.00"
    },{
        icon: 3,
        place: "Stilizion",
        date: "Feb 30, 2022 at 12:00",
        amount: "180.00"
    },{
        icon: 4,
        place: "Mexican food",
        date: "Nov 28, 2022 at 13:21",
        amount: "220.00"
    }]

    const optionsMenu = ['Montly','Per year','Dialy','Every 1h']
  return (
  <div className={TransactionsCSS.father}>
    <div className={TransactionsCSS.title}>
        <h3>Transactions</h3>
        <span className={TransactionsCSS.menu_container}>
            <p style={{padding: "8px"}}>Storage: </p>
            <Menu>
              <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='20px'
              borderWidth='0px'
              backgroundColor='rgb(37, 37, 45)'
              color='#fff'
              padding='7px'
              height='15px'
              fontSize='12px'
              _focus={{ boxShadow: 'outline' }}
              _active={{ background:'rgb(37, 37, 45)' }}
              _hover={{ opacity: ".8" }}
               as={Button} rightIcon={<IoIosArrowDown />}>
                Weekly
              </MenuButton>
              <MenuList backgroundColor='rgb(37, 37, 45)'>
                {optionsMenu.map((option,index)=>{
                  return(
                    <MenuItem 
                    key={index}
                    backgroundColor='rgb(37, 37, 45)'
                    color='#aaa'
                    borderWidth='0px'
                    width='50%'
                    >{option}</MenuItem>
                  )
                })}
              </MenuList>
            </Menu>
        </span>
    </div>
    <div className={TransactionsCSS.transactions}>
        {transactions.map((transaction,index)=>{
            return (
                <Transaction 
                img={transaction.icon}
                place={transaction.place}
                date={transaction.date}
                amount={transaction.amount}
                key={index}
                />
            ) 
        })}
    </div>
  </div>
  )
}

export default Transactions