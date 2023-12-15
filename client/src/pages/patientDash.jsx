/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const PatientDashboard = () => {
  // Mock patient data
  const patientName = "Tessy Bassey Obot";
  const patientAge = "28 years";
  const patientGender = "Female";
  const patientBlood = "O+";
  const patientContact = "15, Ring Road, Nwaniba, Uyo. ";
  const patientEmergency = "Johnny Bassey Obot";
  const patientEmergencyContact = "15, Ring Road, Nwaniba, Uyo. ";
  const allergies = "Pollen, Penicillin";
  const medications = "Aspirin, Antihistamines";
  const pastSurgeries = "Appendectomy - 2018"; "Tonsillectomy - 2015";
  const chronicConditions = "Asthma"; "Hypertension";
  const ongoingTreatments = "Inhaler - twice daily, Blood pressure medication - once daily";
  const date =  "2024-03-15";
  const time =  "11:00 AM";
  const details =  "Asthma review";
  const nextVisit = "2024-01-01"; // Replace this with a date

  return (
    <div className="min-h-screen bg-blue-300">
      <header className="bg-white p-4 flex justify-between items-center">
        <div>
        <img alt="" className="w-12 h-12 rounded-full ri ri bg-gray-500 ri ri" src="https://source.unsplash.com/40x40/?portrait?1" />
        </div>
        <div>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">Logout</button>
        </div>
      </header>


      <div className="container mx-auto py-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <table className="w-full">
            <thead>
              {/* <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Medical History</th>
                <th className="border px-4 py-2">Next Visit</th>
              </tr> */}
            </thead>
            <tbody>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <td className="border px-4 py-2">{patientName}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Age</th>
                <td className="border px-4 py-2">{patientAge}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Gender</th>
                <td className="border px-4 py-2">{patientGender}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Blood Group</th>
                <td className="border px-4 py-2">{patientBlood}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Contact Address</th>
                <td className="border px-4 py-2">{patientContact}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Emergency Contact</th>
                <td className="border px-4 py-2">{patientEmergency}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Emergency Contact Address</th>
                <td className="border px-4 py-2">{patientEmergencyContact}</td>
              </tr>
            </tbody>
          </table>

          <h2 className="mt-10 text-lg font-semibold mb-4">Medical History</h2>
          <table className="w-full">
            <tbody>
              <tr>
                <th className="border px-4 py-2">Allergies</th>
                <td className="border px-4 py-2">{allergies}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Medications</th>
                <td className="border px-4 py-2">{medications}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Past Surgeries</th>
                <td className="border px-4 py-2">{pastSurgeries}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Chronic Conditions</th>
                <td className="border px-4 py-2">{chronicConditions}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Ongoing Treatments</th>
                <td className="border px-4 py-2">{ongoingTreatments}</td>
              </tr>
            </tbody>
          </table>

          <h2 className="mt-10 text-lg font-semibold mb-4">Appointment</h2>
          <table className="w-full">
            <tbody>
              <tr>
                <th className="border px-4 py-2">Date</th>
                <td className="border px-4 py-2">{date}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Time</th>
                <td className="border px-4 py-2">{time}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2">Details</th>
                <td className="border px-4 py-2">{details}</td>
              </tr>
            </tbody>
          </table>

          <h2 className="mt-10 text-lg font-semibold mb-4">Doctor's Notes</h2>
          <p>Please see me as soon as possible</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;