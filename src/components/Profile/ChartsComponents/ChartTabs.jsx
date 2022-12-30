import React, { useEffect, useState }  from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import GraphicCSS from './Chart.module.css'
import { IoIosArrowDown } from 'react-icons/all'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

//Charts
import SimpleBarChartMatDweb from '../../charts/SimpleBarChartMatDweb'
import PieChartSimple from '../../charts/PieChartSimple'
import SimpleRadarChart from '../../charts/SimpleRadarChart'



function BarsGraphic() {

  const optionsMenu = ['Montly','Per year','Dialy','Every 1h']

    // Responsive configuration for graphics container
    const [containerWidth, setContainerWidth] = useState(350)
    useEffect(() => {
      window.screen.width <= 600 ? setContainerWidth(250) : setContainerWidth(350)
    }, [window.screen.width]);

  return (
    <div className={GraphicCSS.graphic}>
          <label className={GraphicCSS.graphic_menu}>
            <Menu>
                <MenuButton
                position='absolute'
                marginBottom='220px'
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='20px'
                borderWidth='0px'
                backgroundColor='rgb(25, 25, 30)'
                color='#fff'
                padding='10px'
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

            <Tabs width={containerWidth} height='400px' colorScheme='rgb(110,112,125)'>
              <TabList
              border='none'
              margin='10px'>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>
              <TabPanels>
                <TabPanel width='100%' height='380px'>

                  {/* //Graphic #1 */}
                  <SimpleBarChartMatDweb />

                </TabPanel>
                <TabPanel width='100%' height='380px'>

                  {/* //Graphic #2 */}
                  <PieChartSimple />

                </TabPanel>
                <TabPanel width='100%' height='380px'>
                  
                  {/* //Graphic #3 */}
                   <SimpleRadarChart />

                </TabPanel>
              </TabPanels>
            </Tabs>
          </label>
          
    </div>
  )
}

export default BarsGraphic