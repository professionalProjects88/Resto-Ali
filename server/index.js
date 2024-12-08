const express = require('express');
const path = require('path');
const app = express();
const food = require('./routes/food');
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api/food", food);
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
