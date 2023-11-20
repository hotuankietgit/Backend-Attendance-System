const express = require("express")
const router = express.Router();
const StudentController = require("../Controller/StudentController")


router.post("/register", StudentController.register);
router.get("/login", StudentController.login);

module.exports = router

