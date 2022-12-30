import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import styles from './styles/In-DecreasingCharts.module.css'

function IncreasingChart() {

    // Data charts
    const Increasing = [
    {name: 'Week 1', uv: 4000},
    {name: 'Week 2', uv: 3400},
    {name: 'Week 3', uv: 2000},
    {name: 'Week 4', uv: 2780},
    {name: 'Week 5', uv: 1890},
    {name: 'Week6', uv: 3700}
];
  return (
    <ResponsiveContainer width="70%" height='30%' 
        className={styles.chart}>
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
  )
}

export default IncreasingChart