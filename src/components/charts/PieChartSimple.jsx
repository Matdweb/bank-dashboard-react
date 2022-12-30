import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

function PieChartSimple() {

    //Circular chart data 
    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#2b53af" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartSimple