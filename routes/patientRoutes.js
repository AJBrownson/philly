const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel');
const bcrypt = require('bcryptjs');


// Register a new patient
router.post('/register', async (req, res) => {
  const { name, user, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new patient instance
    const newPatient = new Patient({
      name,
      email,
      user,
      password: hashedPassword,
    });

    // Save the new patient to the database
    await newPatient.save();

    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});





// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single patient by ID
router.get('/:id', getPatient, (req, res) => {
  res.json(res.patient);
});

// Middleware to get a single patient by ID
async function getPatient(req, res, next) {
  let patient;
  try {
    patient = await Patient.findById(req.params.id);
    if (patient == null) {
      return res.status(404).json({ message: 'Patient not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.patient = patient;
  next();
}

// Patients cannot delete their records
// Patients cannot update their records

module.exports = router;
