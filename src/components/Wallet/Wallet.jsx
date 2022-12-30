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

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

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

        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>

        </div>
    </div>
  )
}

export default Wallet