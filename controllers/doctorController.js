const Doctor  = require("../models/doctorModel");
const DoctorNote = require('../models/doctorNoteModel');
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcryptjs");


module.exports.Signup = async (req, res, next) => {
  try {
    const { username, email, password, createdAt } = req.body;
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.json({ message: "Doctor already exists" });
    }
    const doctor = await Doctor.create({ username, email, password, createdAt });
    const token = createSecretToken(doctor._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "Doctor signed in successfully", success: true, doctor });
    next();
  } catch (error) {
    console.error(error);
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if(!username || !password ){
      return res.json({message:'All fields are required'})
    }
    const doctor = await Doctor.findOne({ username });
    if(!doctor){
      return res.json({message:'Incorrect password or username' }) 
    }
    const auth = await bcrypt.compare(password,doctor.password)
    if (!auth) {
      return res.json({message:'Incorrect password or username' }) 
    }
     const token = createSecretToken(doctor._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "Doctor logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}


// DELETE a doctor by ID
module.exports.deleteDoctorById = async (req, res) => {
  try {
    const doctorId = req.params.id;
    // Replace this with your actual logic to delete a doctor by ID from the database
    await Doctor.findByIdAndDelete(doctorId);
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting doctor', error: error.message });
  }
};


module.exports.createDoctorNote = async (req, res) => {
  try {
    const { note } = req.body;

    const newNote = new DoctorNote({
      note,
    })

    await newNote.save();
    res.status(201).json({ message: 'Doctor note created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create doctor note', message: error.message });
  }
}
