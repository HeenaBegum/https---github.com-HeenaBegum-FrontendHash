import React, { useState } from 'react';
import data from './Instagram.json';

const Hashtags = () => {
  const posts = data.user.nodes || {};
  
  const hashtagRegex = /#\w+/g;

  const [showAllHashtags, setShowAllHashtags] = useState(false);

  const handleToggleHashtags = () => {
    setShowAllHashtags(!showAllHashtags);
  };

  // Extract all hashtags from the posts
  const allHashtags = posts.reduce((hashtags, node) => {
    node.edge_media_to_caption.edges.forEach((edge) => {
      const hashtagsInEdge = edge.node.text.match(hashtagRegex);
      if (hashtagsInEdge) {
        hashtags.push(...hashtagsInEdge);
      }
    });
    return hashtags;
  }, []);

  // Get the displayed hashtags based on showAllHashtags state
  const displayedHashtags = showAllHashtags ? allHashtags : allHashtags.slice(0, 5);

  // Render the component
  return (
    <div className="hashtag-container">
      {displayedHashtags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
      {!showAllHashtags && (
        <button className="view-more-button" onClick={handleToggleHashtags}>
          View More
        </button>
      )}
    </div>
  );
};

export default Hashtags;
