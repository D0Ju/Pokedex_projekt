const api_url = 'https://pokeapi.co/api/v2/pokemon';

async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    data.results.forEach(element => {
        console.log(element.name);
    })
}

getData();


// fetch('https://pokeapi.co/api/v2/pokemon/ditto
//     .then(res => res.json())
//     .then (data => console.log(data))
//     .then(error => console.log('ERROR'))
