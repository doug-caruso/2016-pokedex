(function () {
    "use strict"
    
    function catchPokemon(pokeId){
        $.ajax({
            method: "GET",
            url: "/api/pokemons/" + pokeId
        })
        .done(function(data){
            console.log(data)
        })
    }
    
    $("form").on("submit", event => {
        let pokeId = $("#pokeNumber").val() 
        catchPokemon(pokeId)
        return false;
    })
})()