const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctorModel');

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single doctor by ID
router.get('/:id', getDoctor, (req, res) => {
  res.json(res.doctor);
});

// Middleware to get a single doctor by ID
async function getDoctor(req, res, next) {
  let doctor;
  try {
    doctor = await Doctor.findById(req.params.id);
    if (doctor == null) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.doctor = doctor;
  next();
}

// Doctors can update their records
router.patch('/:id', getDoctor, async (req, res) => {
  if (req.body.name != null) {
    res.doctor.name = req.body.name;
  }
  if (req.body.specialty != null) {
    res.doctor.specialty = req.body.specialty;
  }
  // Add more fields as needed
  try {
    const updatedDoctor = await res.doctor.save();
    res.json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Doctors cannot delete their records

module.exports = router;
