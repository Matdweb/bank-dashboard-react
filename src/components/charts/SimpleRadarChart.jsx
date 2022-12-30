import React from 'react'
import { ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


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


function SimpleRadarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={billsCategories}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#5d76ae" fill="#2b53af" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default SimpleRadarChart