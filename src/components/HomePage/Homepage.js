import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SettingsIcon from '@mui/icons-material/Settings';
import NavBar from './NavBar';
import EngagementIcon from '@mui/icons-material/ThumbUp';
import TrackIcon from '@mui/icons-material/PlayArrow';
import Hashtags from './Hashtags';
import biancaAbbottWellnessImage from './biancaabbottwellness.jpg';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './styles.css';
import Engagement from './Engagement';


  const Homepage = () => {
    
   
   
  

  return (
    <div className="container">
     <NavBar/>

      <div className="sidebar">
      <div className="sidebar-row">
      <div className="sidebar-image">
          <img
            src={biancaAbbottWellnessImage}
            alt="Bianca Abbott Wellness"
          />
        </div>
        </div>

        <div className="sidebar-row">
          <HomeIcon />
          <span>Home</span>
        </div>

        <div className="sidebar-row" >
          <PersonIcon />
          <Link to="/datasection">
          <span>Profile</span></Link>
        </div>

        <div className="sidebar-row">
          <MonetizationOnIcon />
          <span>Earn  Points</span>
        </div>
        <div className="sidebar-row">
          <TrackIcon />
          <span>Track</span>
        </div>
        <div className="sidebar-row">
          <LoyaltyIcon />
          <span>Brands and Collab</span>
        </div>

        <div className="sidebar-row">
          <EngagementIcon />
          <span>Engage</span>
        </div>
        <div className="sidebar-row">
          <SettingsIcon />
          <span>Settings</span>
        </div>

      

      </div>
   

      <div className="content">
      <Box>
      <Paper elevation={3} >
      <Hashtags/>  
      </Paper>
      
     
    </Box>

    </div>

    <div className='engage-content'>
   
     
      <Engagement/>  

      
     
 
      </div>  
        
    </div>
  );
};

export default Homepage;
