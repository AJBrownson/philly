const Doctor  = require("../models/doctorModel");
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
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const doctor = await Doctor.findOne({ email });
    if(!doctor){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
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