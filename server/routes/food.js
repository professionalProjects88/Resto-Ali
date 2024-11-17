const router = require("express").Router()
const {addFood,getFood} =require("../controller/food")
router.post("/addFood",addFood)
router.get("/allFood",getFood)

module.exports = router 