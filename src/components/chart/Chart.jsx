import React from 'react'
import {ResponsiveContainer, LineChart, Line , XAxis, CartesianGrid, Tooltip} from 'react'
export default function Chart({Title,Data, dataKey, grid}) {
  return (
    <div className='chart'>
      <h3 className="chartTitle">{Title}</h3>
      <ResponsiveContainer width='100%' aspect={3}>
        <LineChart Data={Data}>
          <XAxis dataKey='name' stroke='#5550bd'></XAxis>
          <Line dataKey={dataKey} stroke='#5550bd'></Line>
          <Tooltip />
          {grid && <CartesianGrid stroke={'#e0dfdf'} strokeDasharray10 />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
