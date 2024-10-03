require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 8888
const dbConnect = require('./config/dbconnect')

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

const listener = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

dbConnect