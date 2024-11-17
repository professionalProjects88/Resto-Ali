const express = require('express');
const app = express();
const food=require('./routes/food');
const cors=require("cors")

app.use(express.json())
app.use(cors())

app.use("/api/food",food)

const port = 3001;

app.listen(port, () => {
    console.log(`Server is listeing on ${port}`);
});
