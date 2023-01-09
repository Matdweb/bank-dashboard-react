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
    {label: "Name ", content: data.name},
    {label: "For clients ", content: data.client},
    {label: "Date ", content: data.date},
    {label: "ICA ", content: data.ica},
    {label: "Balance ", content: data.balance},
  ]
    return (
      <>
        <Button 
        style={{margin: "10px", marginTop: "50px"}}
        onClick={onOpen}
        colorScheme='twitter'
        variant='outline'>
          Use this one
        </Button>
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent 
          height='75vh' 
          color='#fff'
          backgroundImage='linear-gradient(126deg, rgba(59,60,69,1) 0%, rgba(19,20,22,1) 100%)'>
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
              <div className={styles.containerCard}>
                <CreditCard 
                locked={false}
                data={data}
                />
                <div className={styles.containerButtons}>
                  <Button margin="10px" colorScheme='twitter' variant='outline'>
                    Change to this Card
                  </Button>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }