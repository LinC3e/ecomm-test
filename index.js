const express = require("express")
const app = express()
const mongoose = require('mongoose')
const routerSh = require("./routes/user")
const auth = require("./routes/auth")
require('dotenv').config()

mongoose.connect(process.env.MONGODB).then(() => console.log("DB connection on")).catch((err) => {
    console.log(err)
})

// Middleware
app.use(express.json())

app.use('/api',routerSh)
app.use('/auth',auth )

app.listen(process.env.PORT || 8090, () => {
    console.log("Server on in PORT - ", process.env.PORT )
})