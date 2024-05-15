const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");
const spriteContainer = document.getElementById("sprite-container");
const searchButtonRandom = document.getElementById("search-button-random")

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const getPokemon = async () => {
    try {
        const pokemonNameOrId = searchInput.value.toLowerCase();
        const response = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
        );
        const data = await response.json();

        //pokemon info
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        pokemonId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        spriteContainer.innerHTML = `
          <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
        `;

        //pokemon stats
        hp.textContent = `${data.stats[0].base_stat}`;
        attack.textContent = `${data.stats[1].base_stat}`;
        defense.textContent = `${data.stats[2].base_stat}`;
        spAttack.textContent = `${data.stats[3].base_stat}`;
        spDefense.textContent = `${data.stats[4].base_stat}`;
        speed.textContent = `${data.stats[5].base_stat}`;

        //types
        types.innerHTML = "Type: " + data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');

    }   catch (err) {
        alert("Pokémon not found")
    }
}

const getRandomPokemon = async () => {
    //10001 - 10277
    const randomId = Math.random() < 0.5 ?
        Math.floor(Math.random() * 1025) + 1 :
        Math.floor(Math.random() * (10277 - 10001 + 1)) + 10001;
    try {
        const response = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${randomId}`
        );
        const data = await response.json();
        // Display random Pokémon
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        pokemonId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        spriteContainer.innerHTML = `
          <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
        `;
        hp.textContent = `${data.stats[0].base_stat}`;
        attack.textContent = `${data.stats[1].base_stat}`;
        defense.textContent = `${data.stats[2].base_stat}`;
        spAttack.textContent = `${data.stats[3].base_stat}`;
        spDefense.textContent = `${data.stats[4].base_stat}`;
        speed.textContent = `${data.stats[5].base_stat}`;

        types.innerHTML = "Type: " + data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');
        
    } catch (err) {
        alert("Failed to fetch random Pokémon");
    }
};

searchButtonRandom.addEventListener("click", getRandomPokemon);

const resetDisplay = () => {
    const sprite = document.getElementById('sprite');
    if (sprite) sprite.remove();
  
    // reset stats
    pokemonName.textContent = '';
    pokemonId.textContent = '';
    types.innerHTML = '';
    height.textContent = '';
    weight.textContent = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
  };
  
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    getPokemon();
  });