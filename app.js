let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");


const changePokemon = async () => { // async pour faire marcher le await
    let randomNumber = Math.ceil(Math.random() * 150) + 1; // on recupere un pokemon aléatoire entre les 151 premiers
    // math.ceil() on arrondi le plafond max a 151 au lieu de 150
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    let data = await fetch(requestString); // le await = attend que fetch soit charger avant de lire le reste du code
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
} 

changePokemon();
button.addEventListener("click", changePokemon);