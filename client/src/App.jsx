import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostList from './pages/PostList';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Routes>
          <Route path="/" element={<PostList />} />  {/* Show posts on home page */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/home" element={<Home />} />  {/* Move Home to different path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
