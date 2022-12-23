import React from 'react'
import { Progress } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import GraphicCSS from './BarsGraphic_styles.module.css'

import { IoIosArrowDown } from 'react-icons/all'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

function BarsGraphic() {

    const values = ['$709','$458','$600','$854','$678'] 
    const bars = []
    const optionsMenu = ['Montly','Per year','Dialy','Every 1h']

    // Filling the bars height with the elements in the "values" array 
    let height = 0
    values.map((value,i)=>{
      { value.length == 2 ? height = parseInt(value[1])
      : value.length >= 3 ? height = parseInt(value[1]+value[2])
      : height = 0 }
      bars.push(height)
    })

  return (
    <div className={GraphicCSS.graphic}>
          <label className={GraphicCSS.graphic_menu}>
            <Menu>
                <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='20px'
                borderWidth='0px'
                backgroundColor='rgb(25, 25, 30)'
                color='#fff'
                margin='10px'
                padding='10px'
                marginBottom='10px'
                height='25px'
                _focus={{ boxShadow: 'outline' }}
                _active={{ background:'rgb(37, 37, 45)' }}
                _hover={{ opacity: ".8" }}
                 as={Button} rightIcon={<IoIosArrowDown />}>
                  Montly
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

            <Tabs colorScheme='rgb(110,112,125)'>
              <TabList
              border='none'
              margin='10px'>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>

                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </label>
          <div className={GraphicCSS.graphics_container}>
            {
              bars.map((height,index)=>{
                return (
                <Tooltip key={index} 
                label={values[index]} 
                fontSize='md'
                placement='top'>
                  <Progress 
                  value={0}  
                  className={GraphicCSS.progress_bar} 
                  style={
                    {height: `${height-10}%`}
                  }/>
                </Tooltip>
                )
              })
            }
          </div>
    </div>
  )
}

export default BarsGraphic