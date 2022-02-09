const express = require("express");
const app = express();


const placesController = require("./controllers/placesController.js");

const cors = require("cors");
const places = require("./controllers/placesController");

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
  res.send("<h1>Welcome to our travel app</h1>");
})

app.use("/places", placesController);

module.exports = app;