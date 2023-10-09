const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
const btn = document.getElementById("pokemon") 
const url = "https://pokeapi.co/api/v2/pokemon/"
const card = document.getElementById("card");


const generatePokemon = async ()=>{
    const id = Math.floor(Math.random()*200)+1
    const fUrl = url + id
    const response = await fetch (fUrl);
    const data = await response.json()
    console.log(data);
   generateCard(data)
    

    

}

const generateCard= (data)=>{
    const name = data.name[0].toUpperCase() + data.name.slice(1)
    const hp = data.stats[0].base_stat
    const pokeImg= data.sprites.other.dream_world.front_default;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    const cardColor = typeColor[data.types[0].type.name];
    console.log(cardColor);
    

    card.innerHTML = `
    <div class="card">
            <p class="hp">
                <span>${hp} HP</span>
            </p>
            <img src= ${pokeImg} alt="demo-img">
            <h2 class="pokemon-name">${name}</h2>
            <div class="types">
               
            </div>
            <div class="stats">
                <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${statDefense}</h3>
                    <p>Defence</p>
                </div>
                <div>
                    <h3>${statSpeed}</h3>
                    <p>Speed</p>
                </div>
            </div>
    `
appendTypes(data.types)
styleCard(cardColor);
}
let appendTypes = (types) => {
    types.forEach((item) => {
      let span = document.createElement("SPAN");
      span.textContent = item.type.name;
      document.querySelector(".types").appendChild(span);
    });
  };
  let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
    });
  };
btn.addEventListener("click", generatePokemon)
window.addEventListener('onload',generatePokemon)
