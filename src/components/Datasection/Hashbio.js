import React, { useState } from 'react';

const Hashbio = () => {
  const [newPostText, setNewPostText] = useState('');
  const [newPostImage, setNewPostImage] = useState('');
  const [posts, setPosts] = useState([]);

  // Function to handle new post submission
  const handleNewPost = () => {
    // Create a new post object and add it to the p osts list
    const newPostObject = { id: Date.now(), text: newPostText, image: newPostImage };
    setPosts([...posts, newPostObject]);

    // Clear the new post inputs
    setNewPostText('');
    setNewPostImage('');
  };

  return (
    <div>
      <h2>New Post</h2>
   

      <input type="file" onChange={(e) => setNewPostImage(e.target.files[0])} />

      <button onClick={handleNewPost}>Create Post</button>

      <h2>My Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.text}</p>
          <img src={URL.createObjectURL(post.image)} alt="Post" />
        </div>
      ))}
    </div>
  );
};

export default Hashbio;
