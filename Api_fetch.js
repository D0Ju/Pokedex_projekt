const api_url = 'https://pokeapi.co/api/v2/pokemon';

async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    data.results.forEach(element => {
        const GlavniDiv  = document.getElementById('PokedexContainerId');
        const div =  document.createElement('div');
        div.classList.add("item");
        div.innerHTML = element.name;   
        GlavniDiv.append(div);
    })
}

   


getData();




// fetch('https://pokeapi.co/api/v2/pokemon/ditto
//     .then(res => res.json())
//     .then (data => console.log(data))
//     .then(error => console.log('ERROR'))
