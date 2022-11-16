import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import './Feaure.css'
export default function Feaure() {
  return (
    <div className='w-full flex justify-between'>
      <div className="grow mx-5 p-7 rounded-xl cursor-pointer shadow-lg">
        <div className="text-xl">Revanue</div>
        <div className="flex items-center my-3">
          <span className="text-3xl font-semibold">$2,415</span>
          <span className="flex items-center ml-5">
            -11.4 <ArrowDownwardIcon className='text-red-500' />
          </span>
        </div>
        <span className="text-base text-gray-500">Compared to last month</span>
      </div>

      <div className="grow mx-5 p-7 rounded-xl cursor-pointer shadow-lg">
        <div className="text-xl">Sales</div>
        <div className="flex items-center my-3">
          <span className="text-3xl font-semibold">$2,415</span>
          <span className="flex items-center ml-5">
            -1.4 <ArrowDownwardIcon className='text-red-500' />
          </span>
        </div>
        <span className="text-base text-gray-500">Compared to last month</span>
      </div>

      <div className="grow mx-5 p-7 rounded-xl cursor-pointer shadow-lg">
        <div className="text-xl">Cost</div>
        <div className="flex items-center my-3">
          <span className="text-3xl font-semibold">$2,415</span>
          <span className="flex items-center ml-5">
            +2.4 <ArrowUpwardIcon className='' />
          </span>
        </div>
        <span className="text-base text-gray-500">Compared to last month</span>
      </div>
    </div>
  )
}
