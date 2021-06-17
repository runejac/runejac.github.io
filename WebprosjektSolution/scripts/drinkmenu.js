import BeverageContainerModule from "./modules/BeverageContainerModule.js";

//Importing HTML elements
const drinkList = document.querySelector("#drink-list");
const addBtn = document.querySelector('#add-btn');
const modalButton = document.querySelector('#modal-btn');
const deleteBtn = document.getElementsByClassName('button-delete');
const beverageArr = BeverageContainerModule.getBeverageContainer();
const editBtn = document.getElementsByClassName('edit-button');
let beverageName = document.getElementById('beverage-name');
let beverageIngreds = document.getElementById('beverage-ingreds');
let beveragePrice = document.getElementById('beverage-price');

//function to write out edit Modal, but could not manage to implement an edit fix.
const editBeverage = function () {
	for (let i = 0; i < beverageArr.length; i++) {

		editBtn[i].addEventListener("click", () => {

			alert(`Kan ikke endre på ${beverageArr[i].name} for du er ikke innlogget som administrator.`);
			alert("Forsøkt å legge til følgende endring som dukker opp, men klarte ikke implementere");


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
								<h2 class="columns is-centered modal-title">${beverageArr[i].name}</h2>

								<p class="modal-title">
									Ingredienser:
								</p>

								<input class="input is-medium is-rounded" type="text" value="${beverageArr[i].description}">
								<p class="modal-title">
									Allergener:
								</p>


								<input class="input is-medium is-rounded" type="number" value="${beverageArr[i].price}">

								<!--confirm change of drink button-->
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

//Feedback when deleting drink
function removedDrinkSuccess() {
	document.getElementById("feedback-drink-remove").style = "display:block";
	document.getElementById("feedback-drink-remove").innerHTML = "Drikke fjernet";
	setTimeout(function () {
		document.getElementById("feedback-drink-remove").style = "display:none";
	}, 3000);
}

//Feedback when adding drink
function addedDrinkSuccess() {
	document.getElementById("feedback-drink-add").style = "display:block";
	document.getElementById("feedback-drink-add").innerHTML = "Drikke lagt til";
	setTimeout(function () {
		document.getElementById("feedback-drink-add").style = "display:none";
	}, 3000);
}

//function for deleting an item / card
const deleteLoop = function () {

	for (let i = 0; i < beverageArr.length; i++) {

		deleteBtn[i].addEventListener("click", (e) => {

			let card = document.getElementById(e.target.id + 1);

			card.remove();

			removeBeverageHelper(e.target.id, 1);

			removedDrinkSuccess();


		});
	}

};

function removeBeverageHelper(name) {
	let index = beverageArr.findIndex(beverage => beverage.name === name);
	beverageArr.splice(index, 1);
}

//When "legg til" is clicked empty all input fields
modalButton.addEventListener("mousedown", function () {

	beverageName.value = '';
	beverageIngreds.value = '';
	beveragePrice.value = '';

});

//When added drink, push it to an array and print out arrayobjects
addBtn.addEventListener("mousedown", function () {

	let beverageImg = (document.querySelector('#beverage-img').getAttribute("src"));
	let beverageName = (document.getElementById('beverage-name').value);
	let beverageIngreds = (document.getElementById('beverage-ingreds').value);
	let beveragePrice = (document.getElementById('beverage-price').value);

	//Pushed elements into array
	beverageArr.unshift({
		img: beverageImg,
		name: beverageName,
		description: beverageIngreds,
		price: beveragePrice

	});

	drinkContent();
	deleteLoop();
	addedDrinkSuccess();

});

const drinkContent = () => { //Start of drink generator list
	let htmlTxt = "";

	//For-each loop to generate all the objects in an array
	BeverageContainerModule.getBeverageContainer().forEach(drink => {
		htmlTxt += `
                
                <section id ="${drink.name + 1}" class="column is-12 is-offset-1">
	                <section class="card" style="margin: 1rem;">
				        <div class="card-content">
					        <div class="media">
						        <div class="media-left">
							        <figure class="image is-128x128">
							            <img src="${drink.img}" alt="Drikke">
									</figure>
								</div>
							    <div class="media-content">
								    <p class="title is-4">${drink.name}</p>
								    <p id="drink-size-text" class="subtitle is-6"> <strong>Størrelse: </strong>${drink.description}</p>
		                        </div>
		                        <div class="level-right">
			                    	<div style="margin: 1rem;"><p style="font-weight: bold;">Pris: ${drink.price} kr</p></div>
				                  	<button class="button edit-button c-font"><b><i class="fas fa-edit"></i> Endre</b></button>
			                       	<button id="${drink.name} delete-modal2" class="button is-warning button-delete c-font"><b id="${drink.name}"><i id="${drink.name}" class="fas fa-trash"></i> Fjern</b></button>
								</div>
                            </div>
				        </div>
	                </section>
                </section>
            `;
	});

	//Print out array
	drinkList.innerHTML = htmlTxt;
};

drinkContent();
editBeverage();
deleteLoop();