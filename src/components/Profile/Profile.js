import React from 'react';

const Profile = ({ profileData }) => {
  const { instagram } = profileData || {}; // Use default empty object in case profileData is undefined
  const { user } = instagram || {}; // Use default empty object in case instagram is undefined
  const { profilePic} = profileData || {};
  return (
    <div>
      {user && (
        <div>
          <h2>{user.handle}</h2>
          <p>Bio: {user.bio}</p>
          
          <p>Followers: {user.followerCount}</p>
          
          {/* Render other profile details */}
        </div>
      )}

      {profileData?.data && (
        <div>
          <h3>Data:</h3>
          {profileData.data.map((item, index) => (
            <div key={index}>
              
              <p>Comments: {item.comments}</p>
              <p>Views: {item.views}</p>
              <p>Total Likes: {item.totalLikes}</p>
              {/* Render other data item details */}
              <p>    {profilePic && <img src={profilePic} alt="Profile Picture" />} </p>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
