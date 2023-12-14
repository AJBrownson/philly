const express = require('express');
const router = express.Router();
const Admin = require('../models/adminModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');

// Get all records (doctors, patients, admins)
router.get('/records', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    const patients = await Patient.find();
    const admins = await Admin.find();
    res.json({ doctors, patients, admins });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a doctor's record
router.patch('/doctors/:id', async (req, res) => {
  // Similar to the doctor update route
});

// Delete a doctor
router.delete('/doctors/:id', async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Similar routes for patients (update but not delete), admins (update and delete)

module.exports = router;