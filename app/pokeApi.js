"use strict"

//dependencies
const express = require("express")
const router = express.Router();
const pokeDB = require("./pokeDB.json")

//private 
function catchPokemon(pokeId) {
    return pokeDB.find(poke => poke.id === pokeId)
}

//public API

router.get("/", (req, res) => {
    res.json(pokeDB);
})

router.get("/:pokeId", function(req, res){
    let pokeId = req.params.pokeId
    let pokeData = catchPokemon(pokeId)
    
    if(pokeData) {
        res.json(pokeData)
    }else{
        res.status(404).send("Not Found")
    }
})

//export router
module.exports = router