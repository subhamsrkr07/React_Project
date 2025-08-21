import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from "./Pages/Home"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Influncer from './Pages/Influncer'
import InfluncerDetails from './Pages/InfluncerDetails'






const App = () => {

   const location = useLocation()

  // Hide Navbar on login & signup pages
  const hideNavbarPaths = ["/login", "/signup"]
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname)
  return (
    <>
     {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/influncer" element={<Influncer/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
     <Route path="/influncer/:id" element={<InfluncerDetails />} />

      </Routes>
      </>
   
  )  
}

export default App
