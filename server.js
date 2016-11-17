"use strict"

//dependencies
const express = require('express')
const bodyParser = require('body-parser')

//express configuration
const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))

//welcome
app.get('/', function (req, res) {
    res.sendFile('index.html')
})

//poke API endpoint
app.use("/api/pokemons", require ("./app/pokeApi"))

//start server
const hostname = "localhost"
const port = "3000"
app.listen(port, function () {
    console.log(`Server started: http://${hostname}:${port}`)
})