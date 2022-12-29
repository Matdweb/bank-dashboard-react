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

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BsCheckCircleFill, IoIosArrowDown } from 'react-icons/all'


// Data charts
const Increasing = [
    {name: 'Week 1', uv: 4000},
    {name: 'Week 2', uv: 3400},
    {name: 'Week 3', uv: 2000},
    {name: 'Week 4', uv: 2780},
    {name: 'Week 5', uv: 1890},
    {name: 'Week6', uv: 3700}
];

const Decreasing = [
    {name: 'Week 1', uv: 2400},
    {name: 'Week 2', uv: 1798},
    {name: 'Week 3', uv: 5800},
    {name: 'Week 4', uv: 2908},
    {name: 'Week 5', uv: 4800},
    {name: 'Week6', uv: 3800}
];

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

                    <ResponsiveContainer width="70%" height='30%' 
                    className={WalletCSS.chart}>
                      <AreaChart
                        width={100}
                        height={100}
                        data={Increasing}
                        margin={{
                          top: 5,
                          right: 0,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <Area type="monotone" dataKey="uv"  stroke="#297b4d" fill="#419e69a7" />
                        </AreaChart>
                    </ResponsiveContainer>

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

                    <ResponsiveContainer width="70%" height='30%' 
                    className={WalletCSS.chart}>
                      <AreaChart
                        width={100}
                        height={100}
                        data={Decreasing}
                        margin={{
                          top: 5,
                          right: 0,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <Area type="monotone" dataKey="uv"  stroke="#973f41" fill="#cc595b97" />
                        </AreaChart>
                    </ResponsiveContainer>

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

            </div>
        </div>
        <div className={WalletCSS.container_table}>

        </div>
    </div>
  )
}

export default Wallet