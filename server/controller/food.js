const { food } = require("../database/index");

module.exports = {
  addFood: async (req, res) => {
    try {
      const { imgUrl,categorie, detail,productDetails, price } = req.body;

      
      if (!categorie || !detail || !price ||!imgUrl || !productDetails) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newFood = await food.create({
        data: {
          imgUrl,
          categorie,
          detail,
          productDetails,
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
        res.status(200).json(allFood.reverse())
    } catch (error) {
        throw(error)
    }
  },
  getOne:async(req,res)=>{
    const ID=req.params.id
    try {
      const oneFood=await food.findUnique({where:{id:parseInt(ID)}})
      res.status(200).json(oneFood)
    } catch (error) {
      throw(error)
    }
  }
};
