const api_url = "https://pokeapi.co/api/v2/pokemon";

async function getData() {
	const response = await fetch(api_url);
	const data = await response.json();
	data.results.forEach((Pokemon) => {
		const GlavniDiv = document.getElementById("PokedexContainerId");
		const div = document.createElement("div");
		div.classList.add("item");
		div.innerHTML = Pokemon.name;
		GlavniDiv.append(div);
		const urlPokemona = Pokemon.url;
		console.log(urlPokemona);
		getInfo(urlPokemona, div);
		// element.getElementById("myBtn").addEventListener("click", getInfo());
		//makeButton(div);
	});
}

async function getInfo(url, divItem) {
	const responseUrl = await fetch(url);
	const dataImage = await responseUrl.json();
	const Image = dataImage.sprites.other.home.front_default;
	const weight = dataImage.weight;
	const height = dataImage.height;
	console.log(Image);
	divItem.innerHTML += `<img src = "${Image}"/>
        <button OnClick ="Unhide()"type = "button" id = "myBtn" href='#'>More Info</button>
        <ul id = "idUL" class = "hidden">
            <li> Weight: ${weight}</li>D
            <li> Height: ${height}</li>   
        </ul>
        `;
}
function Unhide() {
	const Button = document.getElementById("myBtn");
	Button.addEventListener("click", (e) => {
		getElementById("idUL").classList.remove("hidden");
	});
}
// async function getStats (){

// }

// async function makeButton(divItem){

//     divItem.innerHTML += `<button type = "button">More Info</button>`;
// }

getData();

//mozda ce bit korisno
//${list.children.length + 1}

//mozda da probam napravit svaku pokemon karticu kao svoj zasebni container te u njemu imam 3 diva za img button i ime
