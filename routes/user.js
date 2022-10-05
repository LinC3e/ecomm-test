const router = require('express').Router()

router.get("/test", (req,res) =>{
    res.send("user test ok")
})

router.post("/testpost", (req,res) => {
    const username = req.body.username
    res.send(`Your username is ${username}`)
})

module.exports = router