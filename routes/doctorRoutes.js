const { Signup, Login, deleteDoctorById} = require("../controllers/doctorController");
const { doctorVerification } = require('../middleware/allMiddleware');
const router = require("express").Router();

router.post('/doctorSignup', Signup)
router.post('/doctorLogin', Login)
router.post('/doctorDash', doctorVerification)
router.delete('/doctor/:id', deleteDoctorById)

module.exports = router;