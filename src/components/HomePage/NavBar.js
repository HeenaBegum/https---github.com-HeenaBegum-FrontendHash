import React from "react"
import Homepage from "./Homepage";
import logo from './logo.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness6Icon from '@mui/icons-material/Brightness6';

const NavBar = () => {  
    return(
    
    <div className="nav-bar">

  <div className="icons-container">
     
  <div className="logo-container" onClick={Homepage}>
        <img src={logo} alt="Logo" className="logo" />
      </div>
    <LogoutIcon />
    <Brightness6Icon />

</div>
</div>

);
};
export default NavBar;
