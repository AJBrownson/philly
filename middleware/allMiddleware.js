const Admin = require("../models/adminModel");
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');
require("dotenv").config();
const jwt = require("jsonwebtoken");


module.exports.adminVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const admin = await Admin.findById(data.id)
      if (admin) return res.json({ status: true, admin: admin.username })
      else return res.json({ status: false })
    }
  })
}


module.exports.doctorVerification = (req, res) => {
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const doctor = await Doctor.findById(data.id)
        if (doctor) return res.json({ status: true, doctor: doctor.username })
        else return res.json({ status: false })
      }
    })
  }

  
  module.exports.patientVerification = (req, res) => {
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const patient = await Patient.findById(data.id)
        if (patient) return res.json({ status: true, patient: patient.username })
        else return res.json({ status: false })
      }
    })
  }