const router = require("express").Router()
const {signUp,signIn} =require("../controller/user")
router.post("/signUp",signUp)
router.post("/signIn",signIn)

module.exports = router