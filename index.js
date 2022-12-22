const express = require('express');

const app = express();

app.get("/", (req, res) => res.send("NOT FOUND PIBE XD"))

app.listen(process.env.PORT || 4000, () => console.log(`Server on Port ${process.env.PORT || 4000}`))