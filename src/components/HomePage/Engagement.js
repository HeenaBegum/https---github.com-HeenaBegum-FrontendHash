import React from 'react';
import data from './Instagram.json';

const Engagement = () => {
  const nodes = data.user.nodes || [];

  // Find the post with the maximum likes
  let maxLikes = 0;
  let maxLikedPost = null;

  nodes.forEach((node) => {
    if (node.edge_media_preview_like.count > maxLikes) {
      maxLikes = node.edge_media_preview_like.count;
      maxLikedPost = node;
    }
  });

  // Render the component
  return (
    <div>
      {maxLikedPost && (
        <div className="max-liked-post">
          <h2>Most liked</h2>
          <img src={`https://img.dyzio.co/image/${maxLikedPost.shortcode}/size/l`} alt="Max Liked Post" />
          <p>Likes: {maxLikedPost.edge_media_preview_like.count}</p>
        </div>
      )}
    </div>
  );
};

export default Engagement;
