const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

app.listen(process.env.PORT || 8090, () => {
    console.log("Server on in PORT - ", process.env.PORT )
})