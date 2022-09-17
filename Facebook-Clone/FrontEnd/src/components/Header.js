import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlined from '@mui/icons-material/SupervisedUserCircle';
import { Avatar , IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';




function Header() {
  return(

   <div className='header'>
       
       < div className='header__left'>
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
            alt=""
            height="40px"
         />
         <div className='header__input'>
          <SearchIcon/>
          <input placeholder='Search Facebook' type='text'/>
         </div>
      
       </div>
       <div className='header__center'>
         <div className='header__option header__option--active'>
              <HomeIcon fontsize = "large"/>
         </div>
         <div className='header__option'>
              <FlagIcon fontsize = "large"/>
         </div>
         <div className='header__option'>
              <SubscriptionsOutlinedIcon fontsize = "large"/>
         </div>
         <div className='header__option'>
              <StorefrontOutlinedIcon fontsize = "large"/>
         </div>
         <div className='header__option'>
              <SupervisedUserCircleOutlined fontsize = "large"/>
         </div>      
       </div>
       <div className='header__right'>
         <div className='header__info'>
          <Avatar src="#"/>
          <h4>Fahad</h4>
         </div>
         <IconButton>
               <AddOutlinedIcon/>
         </IconButton>
         <IconButton>
               <ForumOutlinedIcon/>
         </IconButton>
         <IconButton>
               <NotificationsActiveOutlinedIcon/>
         </IconButton>
         <IconButton>
               <ExpandMoreOutlinedIcon/>
         </IconButton>

       </div>
     
        
    </div>

  );
}

export default Header