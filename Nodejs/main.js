const express = require("express")
const app = express()
const StudentRouter = require("./Router/StudentRouter");
const bodyParser = require('body-parser');

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/student", StudentRouter)

app.listen(process.env.PORT || 8081, console.log("localhost:8080"))