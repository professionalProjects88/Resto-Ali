const { food } = require("../database/index");

module.exports = {
  addFood: async (req, res) => {
    try {
      const { imgUrl,categorie, detail, price } = req.body;

      
      if (!categorie || !detail || !price) {
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
      console.error("Error creating food: " + error);
      res.status(500).json({ error: "Failed to add food" }); // Use correct method
    }
  },
};
