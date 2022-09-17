const URLCAT = 'https://api.thecatapi.com/v1/images/search';
const URLDOG = 'https://api.thedogapi.com/v1/images/search';
const button = document.getElementById("click");

function fetchCat(){ 
    fetch(URLCAT)
    .then(res => res.json())
    .then(data => {
        document.getElementById('img-cat').src = data[0].url;
    })
}

async function fetchDog(){
    const respuesta = await fetch(URLDOG);
    const dato = await respuesta.json();
    document.getElementById('img-dog').src = dato[0].url;
}

function ambosFetch(){
    fetchCat();
    fetchDog();
}

button.onclick = ambosFetch;

ambosFetch()


