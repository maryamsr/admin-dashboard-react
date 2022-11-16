import { color } from '@mui/system'
import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'
export default function Chart({title,data, dataKey, grid}) {
  return (
    <div className="chart m-4  shadow-lg rounded-xl p-5">
    <h3 className='chartTitle text-xl mt-8 mb-3 bold font-semibold' >{title}</h3>
    <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data} >
            <XAxis dataKey="name" stroke='#555' />
            <Line dataKey={dataKey} stroke='#555' type='monotone'/>
            <Tooltip  stroke='#555'/>
            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10" />}
        </LineChart>
    </ResponsiveContainer>
</div>
  )}
