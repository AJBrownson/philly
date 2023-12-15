/* eslint-disable no-unused-vars */
// import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Signup from "./pages/signup";
import Login from './pages/login'
import PatientDashboard from "./pages/patientDash";
import DoctorDashboard from "./pages/doctorDash";
import AdminDashboard from "./pages/adminDash";
import Users from './pages/users'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true


const Routing = () => {

  return (
    <>
      <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/signup' element={ <Signup /> } />
      <Route path='/users' element={ <Users /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/patient" element={<PatientDashboard />} />
      <Route path="/doctor" element={<DoctorDashboard />} />
      <Route path="/admin " element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default Routing;