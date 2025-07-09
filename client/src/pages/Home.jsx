import React, { useEffect, useState } from 'react';
import { postService } from '../services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await postService.getAllPosts();
        setPosts(data.posts || []); // assuming response shape
      } catch (err) {
        console.error('Failed to fetch posts:', err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Latest Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{post.title}</h2>
            <p>{post.excerpt || post.content?.slice(0, 150)}...</p>
            <p><strong>Category:</strong> {post.category?.name || 'N/A'}</p>
            <p><strong>Author:</strong> {post.author?.name || 'Anonymous'}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
