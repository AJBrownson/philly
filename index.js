const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const adminRoute = require("./routes/adminRoutes");
const doctorRoute = require("./routes/doctorRoutes");
const patientRoute = require("./routes/patientRoutes");
const { CONNECTION_URI, PORT } = process.env;

mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected and running successfully. Happy hacking!"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:5173", "https://doctorow.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/admin", adminRoute);
app.use("/patient", patientRoute);
app.use("/doctor", doctorRoute);