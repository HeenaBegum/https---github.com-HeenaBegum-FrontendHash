import React from 'react';
import data from './David.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { faComment } from '@fortawesome/free-solid-svg-icons';
const Tiktok = () => {
  // Access the properties in the JSON data
  const { id, followerCount, verified, thumbnail, name, username, engagementData} = data;
  const posts = data.posts;
  // Render the component
  return (
    <div className="tiktok-container">
    

      {posts.map((post, index) => (
        <div  className="tiktok-post" key={index}>

          
          <video src={post.videoUrl} controls />
          <p> {post.text}</p>
          <button type="button" aria-label={`Like video ${post.authorMeta.heart} likes`} aria-pressed="false" className="tiktok-1ok4pbl-ButtonActionItem e1hk3hf90">
          <span data-e2e="like-icon" className="tiktok-12vi4up-SpanIconWrapper e1hk3hf91" style={{ color: 'rgb(22, 24, 35)' }}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <strong data-e2e="like-count" className="tiktok-14xas1m-StrongText e1hk3hf92">{post.authorMeta.heart}</strong>
        </button>
        <p>
          <FontAwesomeIcon icon={faShare} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          {post.shareCount}
        </p>
        <button type="button" aria-label="Read or add comments" className="tiktok-1ok4pbl-ButtonActionItem e1hk3hf90">
  <span data-e2e="comment-icon" className="tiktok-12vi4up-SpanIconWrapper e1hk3hf91" style={{ color: 'rgb(22, 24, 35)' }}>
    <FontAwesomeIcon icon={faComment} />
  </span>
  <strong data-e2e="comment-count" className="tiktok-14xas1m-StrongText e1hk3hf92">{post.commentCount}</strong>
</button>
       
         
      <p>Created Time: {post.createTime}</p>
   
    
   
    
   
     
      

      <p>Mentions: {post.mentions.join(', ')}</p>
      <div className="hashtags-container">
          {post.hashtags.map((hashtag, index) => (
            <span key={index} className="hashtag">
              #{hashtag}
            </span>
          ))}
        </div>
          </div>
      ))}
    </div>
  );
}

export default Tiktok;
