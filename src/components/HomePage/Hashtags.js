import React from 'react';
import data from './Instagram.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Hashtags = () => {
  const posts = data.user.nodes || {};
  const { handle, isPrivateAccount, profilePic, nodes,bio,createdAt,followerCount,instagramId,isVerified } = data.user;
  const hashtagRegex = /#\w+/g;
  
  // Render the component
  return (
    
      <div className="instagram-container">  
      {posts.map((node, index) => (
        <div className="instagram-post" key={index}>
          <div className="post-icons">
          {node.edge_media_to_caption.edges.map((edge, edgeIndex) => {
              const hashtags = edge.node.text.match(hashtagRegex);
              if (hashtags) {
                const uniqueHashtags = Array.from(new Set(hashtags));
                return uniqueHashtags.map((tag, tagIndex) => (
                  <p key={tagIndex}>{tag}</p>
                ));
              }
              return null;
            })}
          </div>

        </div>
      ))}
    </div>
  );
};

export default Hashtags;
