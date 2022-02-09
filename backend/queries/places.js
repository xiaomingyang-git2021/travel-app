const db = require("../db/dbConfig.js");

const getAllPlaces = async()=>{
  try{
    const allPlaces = await db.any("SELECT * FROM places");
    return allPlaces;
  }catch(err){
    return err;
  }
}

module.exports = {
  getAllPlaces
}