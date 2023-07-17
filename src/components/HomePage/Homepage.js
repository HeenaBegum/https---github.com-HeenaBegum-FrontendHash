import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from './logo.jpg';
import EngagementIcon from '@mui/icons-material/ThumbUp';
import TrackIcon from '@mui/icons-material/PlayArrow';
import Hashtags from './Hashtags';
import biancaAbbottWellnessImage from './biancaabbottwellness.jpg';
import MiddleBox from './MiddleBox';
import './styles.css';


  const Homepage = () => {
    const [showAllHashtags, setShowAllHashtags] = useState(false);
  
    const handleToggleHashtags = () => {
      setShowAllHashtags(!showAllHashtags);
    };
  return (
    <div className="container">
      <div className="nav-bar">
        <div className="content-container">
          <div></div>
          <div className="icons-container">
            
            <LogoutIcon />
            <Brightness6Icon />
          </div>
        </div>
      </div>

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
          <span>Settings</span>
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

      <div className="logo-container" onClick={Homepage}>
        <img src={logo} alt="Logo" className="logo" />
      </div>


      <div className="hashtags-container">
        <Hashtags showAll={showAllHashtags} />
        {!showAllHashtags && (
          <button className="view-more-button" onClick={handleToggleHashtags}>
            View More
          </button>
        )}
      </div>

      <MiddleBox />
      
        
    </div>
  );
};

export default Homepage;
