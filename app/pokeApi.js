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

router.get("/:pokeId", req, res){
    
}

//export router
module.exports = router