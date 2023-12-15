/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const DoctorDashboard = () => {
  const [doctorName] = React.useState('Doctor');
  const [patients, setPatients] = React.useState([
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
    // Add more patient data as needed
  ]);

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        ["http://localhost:5000/doctor", "https://doctorow.netlify.app/doctor"],
        {},
        { withCredentials: true }
      );
      const { status, doctor } = data;
      setUsername(doctor);
      return status
        ? toast(`Hello Dr. ${doctor}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  // Function to delete a patient by the doctor
  const dischargePatient = async (patientId) => {
    try {
      await axios.delete(`/patient/${patientId}`); // Replace with actual API endpoint
      setPatients(patients.filter((patient) => patient.id !== patientId));
    } catch (error) {
      console.error('Error discharging patient:', error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold">{doctorName}'s Dashboard</h1>
          <button className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white" onClick={Logout}>LOGOUT</button>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-8">
          {/* Patients Table */}
          <h2 className="text-2xl font-semibold mb-4">Patients</h2>
          <table className="w-full bg-white shadow-md rounded-md overflow-hidden mb-8">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4">Patient Name</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td className="py-2 px-4">{patient.name}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => dischargePatient(patient.id)}
                      className="bg-red-600 hover:bg-red-700 py-1 px-2 rounded-md text-white"
                    >
                      Discharge
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
      <ToastContainer />
    </>
  );
};

export default DoctorDashboard;
