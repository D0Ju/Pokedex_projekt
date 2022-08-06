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
        getImage();
    })
}

// const api_url_slike = 'https://pokeapi.co/api/v2/pokemon';

// async function getPicture(){
//     const response = await fetch(api_url_slike);
//     const data = await response.json();
//     data.results.forEach(Slika => {

//         const img =  document.createElement('img');
//         img.innerHTML = ;  
//         GlavniDiv.append(div);
//     })
// }


//dohvacanje slike 
const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/2.png";

function getImage(){
fetch(imageUrl)
  //                         vvvv
  .then(response => response.blob())
  .then(imageBlob => {
      // Then create a local URL for that image and print it 
      const imageObjectURL = URL.createObjectURL(imageBlob);
      console.log(imageObjectURL);
  });
}
   


getData();


//mozda ce bit korisno
//${list.children.length + 1}

//mozda da probam napravit svaku pokemon karticu kao svoj zasebni container te u njemu imam 3 diva za img button i ime