import React from 'react';
import './TopBar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function TopBar() {
  return(
    <div className="topbar w-full h-12 sticky top-0 ">
    <div className="topbarWrapper flex p-3 justify-between	items-center">
      <div className="topLeft">
        <span className='logo font-bold	 text-3xl cursor-pointer	'>maryam</span>
      </div>
      <div className="topRight flex items-center">
        <div className="topbarIconContainer">
          <NotificationsIcon />
          <span className="topIconBadge">2</span>
        </div>

        <div className="topbarIconContainer">
          <LanguageIcon />
          <span className="topIconBadge">2</span>
        </div>

        <div className="topbarIconContainer">
          <SettingsIcon />
        </div>
        <img src="/images/logo192.png" alt="" className='topAvatar'/>
      </div>
    </div>
    </div>
  )
}
