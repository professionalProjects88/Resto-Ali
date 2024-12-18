const router = require("express").Router()
const {addFood,getFood,getOne} =require("../controller/food")
router.post("/addFood",addFood)
router.get("/allFood",getFood)
router.get("/food/:id",getOne)

module.exports = router 