const router = require("express").Router()
const {addFood} =require("../controller/food")
router.post("/addFood",addFood)

module.exports = router 