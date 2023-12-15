// const express = require('express')
// const router = express.Router
// const cors = require('cors')

// router.use(
//     cors({
//         credentials: true,
//         origin: 'http://localhost:5173'
//     })
// )

// router.get('/', test);

// module.exports = router;

// routes/auth.ts

import {
    login, register, logout, refreshToken
} from "../controllers/auth";
import { Router } from "express";
const multer = require("multer");
// Multer to process the "multipart/form-data"
const upload = multer();

const router = Router();
router.post("/login", upload.none(), login);
router.post("/register", upload.none(), register);
router.get("/logout", upload.none(), logout);
router.get("/refresh", refreshToken);

export default router;
