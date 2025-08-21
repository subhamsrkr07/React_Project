import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import logo from "../assets/logo.jpg"
import { authDataContext } from '../Context/authContext'
import axios from 'axios'

const Navbar = () => {

    let navigate = useNavigate()
    let {serverurl}=useContext(authDataContext)
  
    const handleLogout = async(e) => {
    const result = await axios.get(serverurl + '/api/auth/logout',{withCredentials:true})
    console.log(result.data)
    navigate("/login")
    }
  return (
    <div className='h-[60px] w-[100%]  bg-gradient-to-r from-purple-400 to-blue-200 flex items-center justify-between top-0 px-[30px]'>
        <div className='w-[20%] flex items-center justify-center gap-[10px]' >
          <img  className= "h-[20px]" src={logo} alt="" />
            <h1 className='text-[20px] text-black'>StarConnect</h1>
        </div>

        <div className='w-[50%]' >
        <ul className='flex justify-center items-center gap-[10px] '>
            <li className='text-[20px] text-black' onClick={()=>navigate("/")}>Home</li>
            <li className='text-[20px] text-black' onClick={()=>navigate("/influncer")}>Influncer</li>
            <li className='text-[20px] text-black' onClick={()=>navigate("/contact")}>Contact</li>
            <li className='text-[20px] text-black' onClick={()=>navigate("/about")}>About</li>
        </ul>
        </div>

         <div className='w-[20%] flex items-center justify-center gap-[15px]' >   
             <button className='px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
          onClick={handleLogout}>
          Logout
        </button>

        </div> 

         
    </div>
  )
}


export default Navbar
