(function () {
    window.addEventListener('DOMContentLoaded', executeScript);

    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=300'
    let pokemons = [];

    async function executeScript() {
        let json = await (await fetch(POKEMON_URL)).json();
        pokemons = json.results;
        pokemons.forEach(addPokemonEl);


        document.querySelectorAll('.pokemon .name').forEach(el => {
            el.addEventListener('click', async (e) => {
                let details = await (await fetch(e.target.getAttribute('data-url'))).json()

                document.getElementById('current-pokemon').setAttribute('src', details.sprites.front_default);
            })
        })
    }

    function addPokemonEl(pokemon) {
        const newPokemonEl = document.createElement('div');
        newPokemonEl.className = 'pokemon';
        newPokemonEl.innerHTML = `
    <div class="name" data-url="${pokemon.url}">${pokemon.name}</div>`;

        document.getElementById('list').appendChild(newPokemonEl);
    }

})();