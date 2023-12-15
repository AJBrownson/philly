const { Signup, Login } = require("../controllers/adminController");
const { adminVerification } = require('../middleware/allMiddleware');
const router = require("express").Router();

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/adminDash', adminVerification)

module.exports = router;