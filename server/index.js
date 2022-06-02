require('dotenv').config()
const express = require("express")

const connection = require("./database")
const cors = require('cors')
// app config 
connection()

const app = express()
app.use(cors())
app.use(express.json())

// port =

const PORT = 8000
app.use('/api/user', require('./router/auth'))
app.use('/api/student', require('./router/student'))

// lstener

app.listen(PORT, () => {
    console.log("app is running the at the port "+ PORT)
})