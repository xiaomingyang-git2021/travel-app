const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
  res.send("<h1>Welcome to our travel app</h1>");
})

module.exports = app;