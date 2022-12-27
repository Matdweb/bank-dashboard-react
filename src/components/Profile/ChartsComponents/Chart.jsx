import React, { useState, useEffect } from 'react'
import { Progress } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
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

import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

  //Circular chart data 
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
 //Radar chart data
  const billsCategories = [
    {
      subject: 'School',
      A: 120,
      fullMark: 150,
    },
    {
      subject: 'Trips',
      A: 98,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      fullMark: 150,
    },
    {
      subject: 'University',
      A: 119,
      fullMark: 150,
    },
    {
      subject: 'Leisure',
      A: 85,
      fullMark: 150,
    },
    {
      subject: 'Food',
      A: 65,
      fullMark: 150,
    },
  ];

function BarsGraphic() {
  //First Bars Chart
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

                </TabPanel>
                <TabPanel width='100%' height='380px'>

                  {/* //Graphic #2 */}
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie dataKey="value" data={data} fill="#2b53af" label />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                </TabPanel>
                <TabPanel width='100%' height='380px'>
                  
                  {/* //Graphic #3 */}
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={billsCategories}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#5d76ae" fill="#2b53af" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>

                </TabPanel>
              </TabPanels>
            </Tabs>
          </label>
          
    </div>
  )
}

export default BarsGraphic