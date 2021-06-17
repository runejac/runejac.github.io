import PizzaContainerModule from "./modules/PizzaContainerModule.js";

//Importing HTML elements
const pizzaList = document.querySelector("#pizza-list");
const addButton = document.querySelector('#add-btn');
const modalButton = document.querySelector('#modal-btn');
const deleteBtn = document.getElementsByClassName('button-delete');
let pizzaArr = PizzaContainerModule.getPizzaContainer();
const editBtn = document.getElementsByClassName('edit-button');
let pizzaName = document.getElementById('pizza-name');
let pizzaIngreds = document.getElementById('pizza-ingreds');
let pizzaAllergs = document.getElementById('pizza-allergs');
let pizzaPrice = document.getElementById('pizza-price');


//function to write out edit Modal, but could not manage to implement an edit fix. 
const editPizza = function () {
	for (let i = 0; i < pizzaArr.length; i++) {

		editBtn[i].addEventListener("click", () => {

			alert(`Du har ikke mulighet til å endre på menyen for du er ikke er kokk.`);
			alert(`Endring kan kun gjøres på ansattsiden.`);
			alert(`Forsøkt implementert endring for pizzameny. ( ikke fungerende )`);

			let ingreds = "";
			let allergies = "";
			let price = "";

			newModal.classList.add('is-active');


			document.getElementById('edit-content').innerHTML = `
    			<!--Box for input-->
    			<div class="box">
					<article class="media">
						<div class="media-content">
							<div class="content">
								<h2 class="columns is-centered modal-title">${pizzaArr[i].name}</h2>

								<p class="modal-title">
									Ingredienser:
								</p>

								<input class="input is-medium is-rounded" type="text" value="${pizzaArr[i].description}">
								<p class="modal-title">
									Allergener:
								</p>

								<input class="input is-medium is-rounded" type="text" value="${pizzaArr[i].allergies}">
								<p class="modal-title">
									Pris:
								</p>

								<input class="input is-medium is-rounded" type="number" value="${pizzaArr[i].price}">

								<!--confirm change of pizza button-->
								<section class="columns is-centered" style="margin-top: 10px;">
									<button class="button c-font close-button" style="background-color: #FFDD57;">Bekreft Endring</button>
								</section>
							</div>

						</div>
					</article>
				</div>`;

		});
	}
};

//feedback when adding pizza
function addedPizzaSuccess(name) {
	document.getElementById("feedback-pizza-add").style = "display:block";
	document.getElementById("feedback-pizza-add").innerHTML = name + " er lagt til";
	setTimeout(function () {
		document.getElementById("feedback-pizza-add").style = "display:none";
	}, 3000);
}

//function for deleting an item / card
const deleteLoop = function () {

	for (let i = 0; i < pizzaArr.length; i++) {
		deleteBtn[i].addEventListener("click", (e) => {

			let card = document.getElementById(e.target.id + 1);
			let result = confirm(`Er du sikker på at du ønsker å fjerne ${e.target.id}?`);

			if (result) {
				card.remove();
				removePizzaHelper(e.target.id, 1);
			}
		});
	}

};

function removePizzaHelper(name) {
	let index = pizzaArr.findIndex(pizza => pizza.name === name);
	pizzaArr.splice(index, 1);


	//feedback when deleting pizza
	document.getElementById("feedback-pizza-remove").style = "display:block";
	document.getElementById("feedback-pizza-remove").innerHTML = name + " er fjernet";
	setTimeout(function () {
		document.getElementById("feedback-pizza-remove").style = "display:none";
	}, 3000);
}

//Tried implementing edit, not working.
/*function closeEditBtn() {
	//console.log(pizza-name-id, pizza-ingreds, pizza-allergs, pizza-price)
	
	newModal.classList.remove('is-active');
	
}*/

//When "legg til pizza" is clicked empty all input fields
modalButton.addEventListener("mousedown", function () {

	pizzaName.value = '';
	pizzaIngreds.value = '';
	pizzaAllergs.value = '';
	pizzaPrice.value = '';

});

//When added pizza, push it to an array and print out arrayobjects
addButton.addEventListener("mousedown", function () {

	let pizzaImg = (document.querySelector('#pizza-img').getAttribute("src"));
	let pizzaName = (document.getElementById('pizza-name').value);
	let pizzaIngreds = (document.getElementById('pizza-ingreds').value);
	let pizzaAllergs = (document.getElementById('pizza-allergs').value);
	let pizzaPrice = (document.getElementById('pizza-price').value);

	//Pushed elements into array
	pizzaArr.unshift({
		img: pizzaImg,
		name: pizzaName,
		description: pizzaIngreds,
		allergies: pizzaAllergs,
		price: pizzaPrice

	});

	pizzaContent();
	deleteLoop();
	editPizza();
	addedPizzaSuccess(pizzaName);

});

//Generate pizzalist
const pizzaContent = () => { //Start of pizza generator list
	let htmlTxt = "";

	//For-each loop to generate all the objects in an array
	pizzaArr.forEach(pizza => {
		htmlTxt += `
                
                <section id="${pizza.name + 1}" class="column is-12 is-offset-1">
	                <section class="card" style="margin: 1rem;">
				        <div class="card-content">
					        <div class="media">
						        <div class="media-left">
							        <figure class="image is-128x128">
							            <img src="${pizza.img}" alt="pizza-image">
									</figure>
								</div>
							    <div class="media-content">
								    <p class="title is-4">${pizza.name}</p>
								    <p id="ingredients-text" class="subtitle is-6"> <strong>Ingredienser: </strong>${pizza.description}</p> 
		                            <p class=""><strong>Allergener: </strong>${pizza.allergies}</p>
		                        </div>
		                        <div class="level-right">
			                    <div style="margin: 1rem;"><p style="font-weight: bold;">Pris: ${pizza.price} kr</p></div>
				                    <button class="button edit-button modal2btn c-font" data-modal="modalTwo"><b><i class="fas fa-edit"></i> Endre</b></button>
			                        <button id="${pizza.name}" class="button button-delete is-warning c-font"><b id="${pizza.name}"><i id="${pizza.name}" class="fas fa-trash"></i> Fjern</b></button>
		                        </div>
                            </div>
				        </div>
	                </section>
                </section>
            `;
	});

	//Print out array
	pizzaList.innerHTML = htmlTxt;
};

//Activate functions;
pizzaContent();
editPizza();
deleteLoop();