const express = require("express");
const places = express.Router();

const { getAllPlaces, getOnePlace } = require("../queries/places.js");

places.get("/", async (req, res)=>{
    try{
        const allPlaces = await getAllPlaces();
        if(allPlaces[0]){
            res.status(200).json(allPlaces);
        } else {
            res.status(500).json({error: "No places were returned from the db"});
        }
    } catch(err){
        console.log(err);
    }
})

places.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try{
        const place = await getOnePlace(id);
        if(place.id){
            res.status(200).json(place);
        } else {
            res.status(500).json({error: "Place was not returned from the db"});
        }
    } catch(err){
        console.log(err);
    }
})

module.exports = places;