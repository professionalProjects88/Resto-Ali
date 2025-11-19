const express = require('express');
const app = express();
const food = require('./routes/food');
const user = require('./routes/user');
const cors = require("cors");
const path = require('path');

app.use(express.json());
app.use(cors());
app.use("/api/food", food);
app.use("/api/user", user);

app.get('/api', (req, res) => res.send('API is running'));

// Serve React frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}


const port=process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
