import React from 'react'
import WalletCSS from './Wallet.module.css'
import { Avatar, Divider } from '@chakra-ui/react'
import CoinsButton from './Button/CoinsButton'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
// Charts 
import IncreasingChart from '../charts/IncreasingChart'
import DecreasingChart from '../charts/DecreasingChart'
import ComposedResponsiveChart from '../charts/ComposedResponsiveChart'

import BasicTable from './Table/Table'

const id_card=[
  {
    value: "2000",
    img: "",
    coin: "USD"
  },
  {
    value: "5000",
    img: "",
    coin: "EUR"
  },
  {text: "Buy now!"}
]

function Wallet() {
  return (
    <div className={WalletCSS.father}>
        <div className={WalletCSS.container_stats}>
            <div className={WalletCSS.container_cards}>
                <div className={WalletCSS.card}>
                    <Stat>
                      <StatLabel>Increasing</StatLabel>
                      <StatNumber>345,670</StatNumber>
                      <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                      </StatHelpText>
                    </Stat>

                    <IncreasingChart />

                </div>
                <div className={WalletCSS.card}>
                    <Stat>
                      <StatLabel>Decreasing</StatLabel>
                      <StatNumber>45</StatNumber>
                      <StatHelpText>
                        <StatArrow type='decrease' />
                        9.05%
                      </StatHelpText>
                    </Stat>

                    <DecreasingChart />

                </div>
            </div>
            <div className={WalletCSS.coinContainer}>
              <Avatar src='https://bit.ly/broken-link' width='120px' height='120px' />
              <div className={WalletCSS.buttons}>
                {id_card.map((content,i)=>{
                  return (<CoinsButton key={i} content={content}/>)
                })}
              </div>
              
            </div>
            <div className={WalletCSS.card_chart}>
              <ComposedResponsiveChart />
            </div>
        </div>
        <div className={WalletCSS.container_table}>
          <BasicTable />
        </div>
    </div>
  )
}

export default Wallet