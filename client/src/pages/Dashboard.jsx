import { useEffect, useState } from 'react';
import { authService } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (!currentUser) {
      navigate('/login');
    } else {
      setUser(currentUser);
    }
  }, []);

  if (!user) return null;

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.username} 👋</h2>
      <p className="text-gray-600 mb-4">You’re now logged in to the MERN Blog.</p>
    </div>
  );
};

export default Dashboard;
