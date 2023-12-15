const Patient  = require("../models/patientModel");
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcryptjs");


module.exports.Signup = async (req, res, next) => {
  try {
    const { username, email, password, createdAt } = req.body;
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.json({ message: "Patient already exists" });
    }
    const patient = await Patient.create({ username, email, password, createdAt });
    const token = createSecretToken(patient._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "Patient signed in successfully", success: true, patient });
    next();
  } catch (error) {
    console.error(error);
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const patient = await Patient.findOne({ email });
    if(!patient){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "Patient logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}



// DELETE a patient by ID
module.exports.deletePatientById = async (req, res) => {
  try {
    const patientId = req.params.id;
    // Replace this with your actual logic to delete a patient by ID from the database
    await Patient.findByIdAndDelete(patientId);
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting patient', error: error.message });
  }
};