const router = require("express").Router()
const {signUp} =require("../controller/user")
router.post("/signUp",signUp)

module.exports = router