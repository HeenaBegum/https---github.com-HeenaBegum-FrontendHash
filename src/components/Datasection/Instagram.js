import React from 'react';
import data from './Instagram.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Instagram = () => {
  const posts = data.user.nodes || {};
  const { handle, isPrivateAccount, profilePic, nodes,bio,createdAt,followerCount,instagramId,isVerified } = data.user;

  // Render the component
  return (
    
      <div className="instagram-container">
      <div className="profile-block">
      <h2>Followers:{followerCount}</h2>
      <h2>isVerified:{isVerified}</h2>

      </div>
      
      <h1>Posts</h1>
      {nodes.map((node, index) => (
        <div className="instagram-post" key={index}>
            
          <p>{`Viewer has liked: ${node.viewer_has_liked.toString()}`}</p>
          <p>{`ID: ${node.id}`}</p>

          <div className="post-icons">
       
          
           
              
                <img src={`https://img.dyzio.co/image/${node.shortcode}/size/l`} alt={`Post ${index + 1}`} />
                <p>{node.edge_media_to_caption.edges[0].node.text}</p>

              
                <button className="icon-button">
    <div className="icon-wrapper">

              
                <span className="icon-counter">{node.likes}</span>
                <FontAwesomeIcon
                  icon={faHeart}
                  color="rgb(142, 142, 142)"
                  className="icon-like"
                  
                />    
                <p>{node.edge_media_preview_like.count}</p>
              </div>
            </button>

            <button className="icon-button">
              <div className="icon-wrapper">
                <FontAwesomeIcon
                  icon={faComment}
                  color="rgb(115, 115, 115)"
                  className="icon-comment"
                />
              </div>
             
            </button>

            <button className="icon-button">
              <div className="icon-wrapper">
                <FontAwesomeIcon
                  icon={faShare}
                  color="rgb(115, 115, 115)"
                  className="icon-share"
                />
              </div>
              
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Instagram;
