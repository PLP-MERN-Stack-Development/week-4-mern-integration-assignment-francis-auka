import { useEffect, useState } from 'react';
import { postService } from '../services/api';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        console.log('Fetching posts...'); // Debug
        const data = await postService.getAllPosts();
        console.log('Posts received:', data); // Debug
        setPosts(data);
        setError('');
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch posts. Check console for details.');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <div className="p-4">Loading posts...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Blog Posts</h2>
      <p className="mb-4">Found {posts.length} posts</p>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{post.content}</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p><strong>Author:</strong> {post.author}</p>
                <p><strong>Category:</strong> {post.category}</p>
                <p><strong>Slug:</strong> {post.slug}</p>
                <p><strong>Created:</strong> {new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsList;
