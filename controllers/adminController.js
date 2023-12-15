const Admin  = require("../models/adminModel");
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcryptjs");


module.exports.Signup = async (req, res, next) => {
  try {
    const { username, email, password, createdAt } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.json({ message: "Admin already exists" });
    }
    const admin = await Admin.create({ username, email, password, createdAt });
    const token = createSecretToken(admin._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "Admin signed in successfully", success: true, admin });
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
    const admin = await Admin.findOne({ email });
    if(!admin){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(admin._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "Admin logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}