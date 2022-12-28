import React from 'react'
import WalletCSS from './Wallet.module.css'

import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'

function Wallet() {
  return (
    <div className={WalletCSS.father}>
        <div className={WalletCSS.container_stats}>
            <div className={WalletCSS.greenStats}>
                <Stat>
                  <StatLabel>Sent</StatLabel>
                  <StatNumber>345,670</StatNumber>
                  <StatHelpText>
                    <StatArrow type='increase' />
                    23.36%
                  </StatHelpText>
                </Stat>
            </div>
            <div className={WalletCSS.redStats}>
                <Stat>
                  <StatLabel>Clicked</StatLabel>
                  <StatNumber>45</StatNumber>
                  <StatHelpText>
                    <StatArrow type='decrease' />
                    9.05%
                  </StatHelpText>
                </Stat>
            </div>
            <div className={WalletCSS.coinContainer}>

            </div>
            <div className={WalletCSS.chart}>

            </div>
        </div>
        <div className={WalletCSS.container_table}>

        </div>
    </div>
  )
}

export default Wallet