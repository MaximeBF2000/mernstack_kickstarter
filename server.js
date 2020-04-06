// Imports
const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000

// Middlewares
require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// MongoDB connection
const connect_db = require("./db_connect")
connect_db()

// Request Handling
app.get('/', (req, res) => {
  res.send("GET request at /")
})


app.listen(PORT, () => console.log(`App listening on port ${PORT}`))