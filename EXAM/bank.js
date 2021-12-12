const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./configuration/db')

//load config
dotenv.config({path: './configuration/config.env' })

connectDB()

const bank = express()

const PORT = process.env.PORT || 5000

bank.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`))