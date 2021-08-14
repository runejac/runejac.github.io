let numSquares = 6;
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easy-btn");
let hardButton = document.querySelector("#hard-btn");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let colorDisplay = document.querySelector("#color-display");
let squares = document.querySelectorAll(".square");
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();
let winsDisplay = document.querySelector("#win");
let lossesDisplay = document.querySelector("#loss");

hardButton.classList.add("selected");


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
	reset();
})


for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function () {
		let clickedColor = this.style.backgroundColor;

		if (pickedColor === clickedColor) {
			messageDisplay.textContent = "CORRECT, YAY! =)";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Next round!";
			winsDisplay.textContent++;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "NOPE! Try again!";
			lossesDisplay.textContent++;
		}
	});
}

function changeColors(color) {
	for (let i = 0; i <squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr; /*sjekk om du kan fjerne denne etterpå og kjøære randomColor() linje 13*/
}

function randomColor() {

	let r = getRandomNumber(0, 255);
	let g = getRandomNumber(0, 255);
	let b = getRandomNumber(0, 255);

	return `rgb(${r}, ${g}, ${b})`;

}

function getRandomNumber(low, high) {

	return Math.floor(Math.random() * (high - low) + low);

}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
}





