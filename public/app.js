const searchInput = document.querySelector("#pokemon-input");
const searchBtn = document.querySelector(".btn-search");
const pokeContainer = document.querySelector(".pokemon-container");
const pokeCount = 50;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#d6b3ff",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ice: "#e0f5ff ",
};
const initPokemon = async () => {
  for (let i = 1; i <= pokeCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  createPokemonBox(data);
};

const createPokemonBox = (pokemon) => {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id;
  const type = pokemon.types[0].type.name;
  const color = colors[type];
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon-box");
  pokemonElement.innerHTML = `
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name} info">
  <h4 class="poke-name">${name}</h4>
  <p class="poke-id">${id}</p>
  <p class="poke-type">Type : ${type}</p>
`;
  pokemonElement.style.backgroundColor = color;
  pokeContainer.appendChild(pokemonElement);
};
searchInput.addEventListener("input", (e) => {
  const names = document.querySelectorAll(".poke-name");
  const text = searchInput.value.toLowerCase();

  names.forEach((name) => {
    name.parentElement.style.display = "block";
    if (!name.innerHTML.toLowerCase().includes(text)) {
      name.parentElement.style.display = "none";
    }
  });
});

initPokemon();
