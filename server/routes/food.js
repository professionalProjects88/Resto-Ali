const router = require("express").Router()
const {addFood,getFood,getOne,deleteOne,updateOne} =require("../controller/food")
router.post("/addFood",addFood)
router.put("/update/:id",updateOne)
router.delete("/delete/:id",deleteOne)
router.get("/allFood",getFood)
router.get("/food/:id",getOne)

module.exports = router 