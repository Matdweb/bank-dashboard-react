import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import styles from './styles/In-DecreasingCharts.module.css'

function DecreasingChart() {

    // Data charts
    const Decreasing = [
        {name: 'Week 1', uv: 2400},
        {name: 'Week 2', uv: 1798},
        {name: 'Week 3', uv: 5800},
        {name: 'Week 4', uv: 2908},
        {name: 'Week 5', uv: 4800},
        {name: 'Week6', uv: 3800}
    ];
    

  return (
    <ResponsiveContainer width="70%" height='30%' 
    className={styles.chart}>
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
  )
}

export default DecreasingChart