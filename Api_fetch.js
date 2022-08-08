const api_url = 'https://pokeapi.co/api/v2/pokemon';

async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    data.results.forEach(Pokemon => {
        const GlavniDiv  = document.getElementById('PokedexContainerId');
        const div =  document.createElement('div');
        div.classList.add("item");
        div.innerHTML = Pokemon.name;
        GlavniDiv.append(div);
        const urlPokemona = Pokemon.url;        
        console.log(urlPokemona);
        getImage(urlPokemona, div);
        //makeButton(div);
    })
}

async function getImage(url,divItem){
    const responseUrl = await fetch(url);
    const dataImage = await responseUrl.json();
    const Image = dataImage.sprites.other.home.front_default;
    console.log(Image);
    divItem.innerHTML += `<img src = "${Image}"/>`;
    divItem.innerHTML += `<button type = "button" href='#'>More Info</button>`;
    
}
// async function makeButton(divItem){

//     divItem.innerHTML += `<button type = "button">More Info</button>`;
// }

getData();


//mozda ce bit korisno
//${list.children.length + 1}

//mozda da probam napravit svaku pokemon karticu kao svoj zasebni container te u njemu imam 3 diva za img button i ime