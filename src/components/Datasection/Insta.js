import data from '../HomePage/socialmedia.json';
import React from 'react';

///import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';


const Insta=()=>{
      const { handle, isPrivateAccount, bio, profilePic,createdAt,followerCount,instagramId,isVerified } = data.body.instagram.user;
      const posts = data.body.instagram.data || {};
    console.log(data);
    return(
  <div className="instagram-container">
   
  <div className="instagram-user-info">
    <h2>Username: {handle}</h2>
    <p>Private Account: {isPrivateAccount}</p>
    <p>Bio: {bio}</p>
    
  
    <p>Created At: {createdAt}</p>
    <p>Follower Count: {followerCount}</p>
    <p>Instagram ID: {instagramId}</p>
    <p>Verified: {isVerified}</p>
  </div>

  <div className="instagram-posts">
  {posts.map((post, index) => (
      <div className="instagram-post" key={index}>
      
      <img src={`https://img.dyzio.co/image/${post.code}/size/l`} alt={`Post ${index + 1}`} />
   
          <p>Post Caption: {post.caption}</p>
        <p>Post Caption: {post.caption}</p>
        <p>Comments: {post.comments}</p>
        <p>Total Likes: {post.totalLikes}</p>
        {/* Add more properties as needed */}
      </div>
    ))}
  </div>
</div>
);
};
export default Insta;
