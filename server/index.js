const express = require('express');
const path = require('path');
const app = express();
const food = require('./routes/food');
const user = require('./routes/user');
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api/food", food);
app.use("/api/user", user);


const port=3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
