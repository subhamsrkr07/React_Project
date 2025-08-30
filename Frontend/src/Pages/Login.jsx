
import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { authDataContext } from '../Context/AuthContext.jsx';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate()
  let { serverurl } = useContext(authDataContext)



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        serverurl + '/api/auth/login',
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
   

        navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='h-[100vh] w-full bg-gradient-to-r from-purple-500 to-indigo-600 '>
      <div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[yellow] px-[15px]">
        Star Connect
    </h1>

      </div>
    <div className="h-[80vh] w-full flex items-center justify-center  px-4">
      <div className="bg-white rounded-2xl shadow-lg flex overflow-hidden max-w-4xl w-full">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-indigo-600 text-white p-10 w-1/2">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg text-center">
            Login to access your account, manage your dashboard and explore new features.
          </p>
        </div>

        {/* Right Side (Login Form) */}
        <div className="p-8 w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login to Your Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Extra Links */}
          <p className="mt-6 text-sm text-center text-gray-500">
            Don’t have an account?{' '}
            <a href="/signup"  className="text-indigo-600 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login;
