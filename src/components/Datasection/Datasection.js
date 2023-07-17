
import './profilestyles.css';
import React, { useState } from 'react';
import Tiktok from './Tiktok';
import InstagramData from './Instagram';
import TikTokLogo from './tiktokimage.jpg';
import InstagramLogo from './insta.jpg';
import NavBar from '../HomePage/NavBar';
import HashbioLogo from './logo.jpg';
import Hashbio from './Hashbio'

const Datasection = () => {
  const [showTiktok, setShowTiktok] = useState(false);
  const [showInstagram, setShowInstagram] = useState(false);
  const [showHashbio, setShowHashbio] = useState(false);
  const handleTiktokClick = () => {
    setShowTiktok(true);
    setShowInstagram(false);
  };

  const handleInstagramClick = () => {
    setShowTiktok(false);
    setShowInstagram(true);
  };

  const handleHashbioClick= () => {
    setShowTiktok(false);
    setShowInstagram(false);
    setShowHashbio(true);
  };

  return (

    
    <div className='datasection-container' >

    <div> 
      <NavBar/></div>
      <div className='profile-section'>

<div className="flex justify-end "><div class="w-[1px] h-[10px] bg-bordercolor mr-2 mt-3"></div><div class="mt-1"><a class="border-none text-black hover:text-textgray" title="view all" href="/user/biancaabbottwellness/posts/"></a></div></div>
    <img className="h-[36px] w-[37px] rounded-[40px] p-[3px]" src="https://linkingv2.s3.us-east-2.amazonaws.com/public/c/pic/tt/0HQ5oReq3WzuVZE/biancaabbottwellness.jpg" alt="user avatar"/>
    
     <div class="logo-item">
     
        <img className="tiktok" src={TikTokLogo} alt="TikTok" onClick={handleTiktokClick} />
     
    
        <img  className="insta" src={InstagramLogo} alt="Instagram" onClick={handleInstagramClick} />
        <img  className="hashbio" src={HashbioLogo} alt="Instagram" onClick={handleHashbioClick} />
      </div>
      <hr className="logo-line" /> {/* Added line */}
      {showTiktok && <Tiktok />}
      {showInstagram && <InstagramData />}
      {showHashbio && <Hashbio />}
      
      </div>
    </div>
  );
}

export default Datasection;
