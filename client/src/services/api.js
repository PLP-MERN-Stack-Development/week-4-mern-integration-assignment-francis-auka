import axios from 'axios';

// Base Axios instance
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// ----- POST SERVICES -----
const createPost = async (postData) => {
  const response = await API.post('/posts', postData);
  return response.data;
};

const getAllPosts = async () => {
  const response = await API.get('/posts');
  return response.data;
};

const getPostById = async (id) => {
  const response = await API.get(`/posts/${id}`);
  return response.data;
};

const updatePost = async (id, postData) => {
  const response = await API.put(`/posts/${id}`, postData);
  return response.data;
};

const deletePost = async (id) => {
  const response = await API.delete(`/posts/${id}`);
  return response.data;
};

export const postService = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};

// ----- AUTH SERVICES -----
const register = async (userData) => {
  const response = await API.post('/auth/register', userData);
  return response.data;
};

const login = async (credentials) => {
  const response = await API.post('/auth/login', credentials);
  return response.data;
};

export const authService = {
  register,
  login,
};
