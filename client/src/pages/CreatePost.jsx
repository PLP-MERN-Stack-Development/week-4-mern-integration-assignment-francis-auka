import { useState } from 'react';
import { postService } from '../services/api';

export default function CreatePost() {
  const [form, setForm] = useState({ title: '', content: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await postService.createPost(form);
      setMsg('✅ Post saved!');
      setForm({ title: '', content: '' });
    } catch (err) {
      setMsg('❌ ' + (err.response?.data?.message || 'Failed'));
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          rows={6}
          required
        />
        <button type="submit">Publish</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
