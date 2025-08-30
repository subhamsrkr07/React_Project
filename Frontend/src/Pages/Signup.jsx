
// import React, { useContext, useState } from 'react'
// import { authDataContext } from '../Context/authContext';
// import axios from "axios"
// import { useNavigate } from 'react-router';
// import { motion } from "framer-motion";

// const Signup = () => {
//   let { serverurl } = useContext(authDataContext)
//   let [name, setName] = useState("")
//   let [email, setEmail] = useState("")
//   let [password, setPassword] = useState("")
//   let navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await axios.post(serverurl + '/api/auth/signup', { name, email, password }, { withCredentials: true })
//       console.log(result.data)
//       navigate("/login") // Redirect after signup
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-400 px-4">
//       <motion.div
//         className="max-w-md w-full bg-white shadow-md rounded-lg p-8"
//         initial={{ opacity: 0, y: 50 }}      // Start hidden & below
//         animate={{ opacity: 1, y: 0 }}       // Fade in & slide up
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
//           Create an Account
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               placeholder="Your Name"
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               placeholder="you@example.com"
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               placeholder="••••••••"
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>

//           {/* Submit Button with hover animation */}
//           <motion.button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Sign Up
//           </motion.button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <a href="/login" className="text-indigo-600 hover:underline">
//             Login
//           </a>
//         </p>
//       </motion.div>
//     </div>
//   )
// }

// export default Signup


import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { authDataContext } from '../Context/AuthContext.jsx';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  let { serverurl } = useContext(authDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const result = await axios.post(
      //   serverurl + '/api/auth/signup',
      //   { name, email, password },
      //   { withCredentials: true }
      // );
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

      <div className="h-[80vh] w-full flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg flex overflow-hidden max-w-4xl w-full">
          
          {/* Left Side */}
          <div className="hidden md:flex flex-col justify-center items-center bg-indigo-600 text-white p-10 w-1/2">
            <h2 className="text-3xl font-bold mb-4">Join Us!</h2>
            <p className="text-lg text-center">
              Create an account and start exploring amazing features on our platform.
            </p>
          </div>

          {/* Right Side (Signup Form) */}
          <div className="p-8 w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Create Your Account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

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
                Sign Up
              </button>
            </form>

            {/* Extra Links */}
            <p className="mt-6 text-sm text-center text-gray-500">
              Already have an account?{' '}
              <a href="/login" className="text-indigo-600 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;

