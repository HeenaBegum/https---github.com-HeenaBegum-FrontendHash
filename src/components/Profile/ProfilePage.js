
import Profile from '../Profile/Profile';
import socialMediaData from './socialmedia.json'
import React, {useEffect,useState } from 'react';

const ProfilePage = () => {
const [profileData, setProfileData] = useState(null);


useEffect(() => {
  setProfileData(socialMediaData.body.instagram);

}, []);



return(

    <div>
    {profileData && <Profile profileData={profileData} />}
    </div>

    
);
}

export default ProfilePage;