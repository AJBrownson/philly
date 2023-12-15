const { Signup, Login } = require("../controllers/doctorController");
const { doctorVerification } = require('../middleware/allMiddleware');
const router = require("express").Router();

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/doctorDash', doctorVerification)

module.exports = router;