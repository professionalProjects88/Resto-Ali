const express = require('express');
const app = express();
const food = require('./routes/food');
const user = require('./routes/user');
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api/food", food);
app.use("/api/user", user);


const port=process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
