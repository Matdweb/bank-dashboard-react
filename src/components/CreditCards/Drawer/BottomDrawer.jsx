import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
  } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import CreditCard from '../CreditCardComponent/CreditCard'
import { Button } from '@chakra-ui/react'
import styles from './Drawer.module.css'

export default function BottomDrawer({ data }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const acountContent = [
    {label: "Account ", content: data.account},
    {label: "Number ", content: data.number},
    {label: "Date ", content: data.date},
    {label: "Name ", content: data.name},
    {label: "ICA ", content: data.ica},
    {label: "Balance ", content: data.balance},
    {label: "For clients ", content: data.client}
  ]
    return (
      <>
        <Button 
        style={{margin: "10px"}}
        onClick={onOpen}
        colorScheme='twitter'
        variant='outline'>
          Use this one
        </Button>
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen} background='black'>
          <DrawerOverlay />
          <DrawerContent height='75vh' background='#aaa'>
            <DrawerHeader borderBottomWidth='1px'>Account</DrawerHeader>
            <DrawerBody className={styles.body}>
              <div className={styles.content}>
                {acountContent.map((data,index)=>{
                  return(
                    <span key={index} className={styles.data}>
                      <p style={{opacity: ".6"}}>{data.label}</p>
                      <h5>{data.content}</h5>
                    </span>
                  )
                })}
              </div>
              <div>
                <CreditCard 
                locked={false}
                data={data}
                />
                <button>a</button>
                <button>b</button>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }