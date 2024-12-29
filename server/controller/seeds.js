const { food } = require("../database/index");

const generateSeeds=async()=>{
    try {
        await food.createMany({
            data:[
                {
                    "imgUrl": "https://images.immediate.co.uk/production/volatile/sites/2/2022/04/Tiramisu-e2a657d.jpg?quality=90&resize=556,505",
                    "categorie": "Dessert",
                    "detail": "gateau",
                    "productDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "price": 99.99
                    },
                    {
                    "imgUrl": "https://otrity.com/wp-content/uploads/boisson-gazeuse-schweps-citron-canette.jpg",
                    "categorie": "Boisson",
                    "detail": "schweps",
                    "productDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "price": 99.99
                    },
                    {
                    "imgUrl": "https://www.allrecipes.com/thmb/YtQTzQMY-qxrqBJvUBx_CzAj7mk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg",
                    "categorie": "TexMex",
                    "detail": "checken",
                    "productDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "price": 99.99
                    },
                    {
                    "imgUrl": "https://www.simplyrecipes.com/thmb/0NrKQlJ691l6L9tZXpL06uOuWis=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Greek-Salad-LEAD-2-4601eff771fd4de38f9722e8cafc897a.jpg",
                    "categorie": "Salade",
                    "detail": "melange",
                    "productDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "price": 99.99
                    },
                    {
                    "imgUrl": "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    "categorie": "Pizza",
                    "detail": "peporoni",
                    "productDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "price": 99.99
                    },
                    {
                    "imgUrl": "https://www.munatycooking.com/wp-content/uploads/2023/03/Lamb-Shanks-Couscous-feature-image-500x500.jpg",
                    "categorie": "Plat",
                    "detail": "couscous",
                    "productDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "price": 99.99
                    },
                    {
                    "imgUrl": "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
                    "categorie": "Burger",
                    "detail": "XL",
                    "productDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "price": 99.99
                    },
                    {
                    "imgUrl": "https://pinchandswirl.com/wp-content/uploads/2022/11/Lamb-Tacos__sq.jpg",
                    "categorie": "Taco",
                    "detail": "XL",
                    "productDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "price": 99.99
                    },
                    {
                    "imgUrl": "https://marfast.co.uk/media/catalog/product/cache/1a4bab5a73591f763a34c348621704d6/8/2/823777-grillmarkedpanini.jpg",
                    "categorie": "Sandwiche",
                    "detail": "Panini",
                    "productDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "price": 99.99
                    }
                    
            ]
        })
        console.log('Food seeds created successfully!');
    } catch (error) {
        console.log(error);
        
    }
}

generateSeeds()
