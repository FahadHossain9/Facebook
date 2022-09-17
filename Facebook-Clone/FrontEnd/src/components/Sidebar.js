import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, Storefront, VideoLibrary } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
function Sidebar() {
  return (
    <div className='sidebar'>
       <SidebarRow src="https://www.udbhava.org/assets/images/events/6ace738869c02bcf0b4e65ee20df9086.png" title="Fahad"/>
       <SidebarRow Icon={LocalHospital} title="Covid-19 Information Center"/>
       <SidebarRow Icon={EmojiFlags} title="Pages"/>
       <SidebarRow Icon={Chat} title="Friends"/>
       <SidebarRow Icon={Storefront} title="Messenger"/>
       <SidebarRow Icon={VideoLibrary} title="Videos"/>
       <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>
       
    </div>
  );
}

export default Sidebar