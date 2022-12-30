import React from 'react'
import styles from './styles/SimpleBarChartMatDweb.module.css'
import { Progress, Tooltip } from '@chakra-ui/react'

function SimpleBarChartMatDweb() {
     //First Bars Chart
     const values = ['$709','$458','$600','$854','$678'] 
     const bars = []
 
     // Filling the bars height with the elements in the "values" array 
     let height = 0
     values.map((value,i)=>{
       { value.length == 2 ? height = parseInt(value[1])
       : value.length >= 3 ? height = parseInt(value[1]+value[2])
       : height = 0 }
       bars.push(height)
     })
 
  return (
    <div className={styles.container}>
      {
        bars.map((height,index)=>{
          return (
          <Tooltip key={index} 
          label={values[index]} 
          fontSize='md'
          placement='top'>
            <Progress 
            value={0}  
            className={styles.progress_bar} 
            style={
              {height: `${height-10}%`}
            }/>
          </Tooltip>
          )
        })
      }
    </div>
  )
}

export default SimpleBarChartMatDweb