import React from 'react';
import './TopBar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function TopBar() {
  return(
    <div className="z-50 w-full h-12 sticky top-0 ">
      <div className="topbarWrapper flex p-3 justify-between	items-center">
        <div className="topLeft">
          <span className='logo font-bold	 text-3xl cursor-pointer	'>maryam</span>
        </div>
        <div className="topRight flex items-center">
          <div className="relative cursor-pointer ml-3 text-gray-400">
            <NotificationsIcon />
            <span className="w-3 h-3 absolute -top-1 right-0 bg-red-500 text-white flex items-center justify-center rounded-[50%] text-xs">2</span>
          </div>

          <div className="relative cursor-pointer ml-3 text-gray-400">
            <LanguageIcon />
            <span className="w-3 h-3 absolute -top-1 right-0 bg-red-500 text-white flex items-center justify-center rounded-[50%] text-xs">2</span>
          </div>

          <div className="relative cursor-pointer ml-3 text-gray-400">
            <SettingsIcon />
          </div>
          <img src="/images/logo192.png" alt="" className='rounded-[50%] ml-4 h-10 w-10 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}
