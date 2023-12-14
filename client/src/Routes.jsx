/* eslint-disable no-unused-vars */
// import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Register from "./pages/register";
import Login from './pages/login'
import PatientDashboard from "./pages/patient";




const Routing = () => {
//   const [loggedIn, setLoggedIn] = useState(false)
//   const [email, setEmail] = useState("")
  return (
    <>
      <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/patient" element={<PatientDashboard />} />
      </Routes>
    </>
  );
};

export default Routing;