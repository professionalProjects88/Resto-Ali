const { food } = require("../database/index");

module.exports = {
  addFood: async (req, res) => {
    try {
      const { imgUrl,categorie, detail, price } = req.body;

      
      if (!categorie || !detail || !price ||!imgUrl) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newFood = await food.create({
        data: {
          imgUrl,
          categorie,
          detail,
          price,
        },
      });

      res.status(200).json(newFood); 
    } catch (error) {
      throw(error);
    }
  },
  getFood:async(req,res)=>{
    try {
        const allFood=await food.findMany({})
        res.status(200).json(allFood)
    } catch (error) {
        throw(error)
    }
  }
};
