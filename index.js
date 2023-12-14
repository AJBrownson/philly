const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT


// Connects the applicaton to MongoDB
connectDB()


// Middleware
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
    cors({
    origin: ['http://localhost:5173'],
    })
)

// Import routes
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Middleware and MongoDB connection setup (as previously shown)

// Use routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/admins', adminRoutes);



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))