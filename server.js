const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello, World" });
});


module.exports = { app };
