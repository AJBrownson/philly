const { Signup, Login, deletePatientById } = require("../controllers/patientController");
const { patientVerification } = require('../middleware/allMiddleware')
const router = require("express").Router();

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/patientDash', patientVerification)
router.delete('/patients/:id', deletePatientById)

module.exports = router;