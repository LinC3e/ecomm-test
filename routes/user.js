const router = require('express').Router()

router.get("/test", (req,res) =>{
    res.send("user test ok")
})

module.exports = router