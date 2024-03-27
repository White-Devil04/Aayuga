import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="flex h-screen w-full items-center bg-gradient-to-t from-[#72ddf5]">
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit} className="bg-white w-96 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-dark text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-dark text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex items-center justify-center">
            <button
              className="bg-[#2262ef] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
            >
              LogIn
            </button>
          </div>
        </form>
        <div className=''>
          Don't have account
          <Link to='/signup' className='mx-3 py-2 px-3 text-sm text-white font-bold bg-[#2262ef] hover:bg-blue-700 rounded-md'>SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
