import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'

import {Link} from 'react-router-dom'


import './Sidbar.css'

export default function Sidbar() {
  return (
    <div className='h-screen static top-12 w-[15vw] bg-gray-100'>
      <div className="p-5 text-slate-700">
        <div className="mb-3">
          <div className="text-sm text-slate-700">Dashboard</div>
          <ul className="list-none p-1 flex flex-col gap-2">
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300 bg-gray-300">
                <LineStyleIcon  className='mr-1 text-xl'/>
                Home
              </li>
            </Link>
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <TimelineIcon  className='mr-1 text-xl'/>
                Analytics
              </li>
            </Link>
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <TrendingUpIcon  className='mr-1 text-xl'/>
                Sales
              </li>
            </Link>
          </ul>


          <div className="text-sm text-slate-700">Quick Menu</div>
          <ul className="list-none p-1 flex flex-col gap-2">
            <Link to='/users'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300 ">
                <PermIdentityIcon  className='mr-1 text-xl'/>
                Users
              </li>
            </Link>
            <Link to='/newUser'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300 ">
                <PermIdentityIcon  className='mr-1 text-xl'/>
                New User
              </li>
            </Link>
            <Link to='/producte'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <StorefrontIcon  className='mr-1 text-xl'/>
                Products
              </li>
            </Link>
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <AttachMoneyIcon  className='mr-1 text-xl'/>
                Transactions
              </li>
            </Link>

            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <BarChartIcon  className='mr-1 text-xl'/>
                Reports
              </li>
            </Link>
          </ul>

          <div className="text-sm text-slate-700">Notifictions</div>
          <ul className="list-none p-1 flex flex-col gap-2">
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300 ">
                <MailOutlineIcon  className='mr-1 text-xl'/>
                Mail
              </li>
            </Link>
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <DynamicFeedIcon  className='mr-1 text-xl'/>
                Freedback
              </li>
            </Link>
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <MessageOutlinedIcon  className='mr-1 text-xl'/>
                Messgae
              </li>
            </Link>
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <MailOutlineIcon  className='mr-1 text-xl'/>
              </li>
            </Link>
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <BarChartIcon  className='mr-1 text-xl'/>
                transaction
              </li>
            </Link>
          </ul>

          <div className="text-sm text-slate-700">Staff</div>
          <ul className="list-none p-1 flex flex-col gap-2">
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300 ">
                <WorkOutlineIcon  className='mr-1 text-xl'/>
                Manage
              </li>
            </Link>
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <TimelineIcon  className='mr-1 text-xl'/>
                Analytics
              </li>
            </Link>
            <Link to='/'>
              <li className="p-2 cursor-pointer flex items-center rounded-lg hover:bg-gray-300">
                <RepeatSharpIcon  className='mr-1 text-xl'/>
                Reports
              </li>
            </Link>

          </ul>
        </div>
      </div>
    </div>
  )
}
