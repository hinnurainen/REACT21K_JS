(function () {
    window.addEventListener('DOMContentLoaded', executeScript)

    const pokemons = [{
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "sprites": {
            "back_female": "http://pokeapi.co/media/sprites/pokemon/back/female/1.png",
            "back_shiny_female": "http://pokeapi.co/media/sprites/pokemon/back/shiny/female/1.png",
            "back_default": "http://pokeapi.co/media/sprites/pokemon/back/1.png",
            "front_female": "http://pokeapi.co/media/sprites/pokemon/female/1.png",
            "front_shiny_female": "http://pokeapi.co/media/sprites/pokemon/shiny/female/1.png",
            "back_shiny": "http://pokeapi.co/media/sprites/pokemon/back/shiny/1.png",
            "front_default": "http://pokeapi.co/media/sprites/pokemon/1.png",
            "front_shiny": "http://pokeapi.co/media/sprites/pokemon/shiny/1.png"
        },
    }];

    function executeScript() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
            .then(resp => resp.json())
            .then(json => {
                json.results.forEach(addPokemon)
            })
    }

    function addPokemon(pokemon) {
        const newEl = document.createElement('div');
        newEl.className = 'pokemon';
        newEl.innerHTML = `<img src=${pokemon.sprites.front_default}><div class="nickname">${pokemon.name}</div>
    <div class="url">${pokemon.url}</div>`;

        document.getElementById('pokemon-list').appendChild(newEl);
    }
})();


/**
const pokemonImgs = [{
    "sprites": {
        "back_female": "http://pokeapi.co/media/sprites/pokemon/back/female/1.png",
        "back_shiny_female": "http://pokeapi.co/media/sprites/pokemon/back/shiny/female/1.png",
        "back_default": "http://pokeapi.co/media/sprites/pokemon/back/1.png",
        "front_female": "http://pokeapi.co/media/sprites/pokemon/female/1.png",
        "front_shiny_female": "http://pokeapi.co/media/sprites/pokemon/shiny/female/1.png",
        "back_shiny": "http://pokeapi.co/media/sprites/pokemon/back/shiny/1.png",
        "front_default": "http://pokeapi.co/media/sprites/pokemon/1.png",
        "front_shiny": "http://pokeapi.co/media/sprites/pokemon/shiny/1.png"
    },
}];


function addPokemonImg(pokemonImg) {
    const newEl = document.createElement('div');
    newEl.className = 'pokemonImg';
    newEl.innerHTML = `            <div class="profile-image">
    <img src="${pokemonImg.sprites.front_default}"/>
</div>`;

    document.getElementById('pokemon-list').appendChild(newEl);
} */