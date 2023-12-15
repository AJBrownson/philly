/* eslint-disable no-unused-vars */
// import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Signup from "./pages/signup";
import Login from './pages/login'
import DoctorLogin from "./pages/doctorLogin";
import DoctorSignup from './pages/doctorSignup'
import PatientDashboard from "./pages/patientDash";
import EditPatientDashboard from "./pages/editPatientDash";
import DoctorDashboard from "./pages/doctorDash";
import AdminDashboard from "./pages/adminDash";
import Users from './pages/users'



const Routing = () => {

  return (
    <>
      <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/signup' element={ <Signup /> } />
      <Route path='/users' element={ <Users /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/doctorLogin" element={<DoctorLogin />} />
      <Route path="/doctorSignup" element={<DoctorSignup />} />
      <Route path="/patientDash" element={<PatientDashboard />} />
      <Route path="/editPatientDash" element={<EditPatientDashboard />} />
      <Route path="/doctorDash" element={<DoctorDashboard />} />
      <Route path="/adminDash" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default Routing;