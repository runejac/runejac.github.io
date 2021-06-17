const BeverageContainerModule = (function () {

	const beverageContainer = [{
			img: "images/meny/beverages/cola05.png",
			name: "Coca cola",
			description: "0.5 l",
			price: 29
		},
		{
			img: "images/meny/beverages/cola15.png",
			name: "Coca cola",
			description: "1.5 l",
			price: 49
		},
		{
			img: "images/meny/beverages/colazero05.png",
			name: "Coca cola uten sukker",
			description: "0.5 l",
			price: 29
		},
		{
			img: "images/meny/beverages/colazero15.png",
			name: "Coca cola uten sukker",
			description: "1.5 l",
			price: 49
		},
		{
			img: "images/meny/beverages/sprite05.png",
			name: "Sprite",
			description: "0.5 l",
			price: 29
		},
		{
			img: "images/meny/beverages/sprite15.png",
			name: "Sprite",
			description: "1.5 l",
			price: 49
		},
		{
			img: "images/meny/beverages/fanta05.png",
			name: "Fanta",
			description: "0.5 l",
			price: 29
		},
		{
			img: "images/meny/beverages/fanta15.png",
			name: "Fanta",
			description: "1.5 l",
			price: 49
		},
		{
			img: "images/meny/beverages/urge05.png",
			name: "Urge",
			description: "0.5 l",
			price: 29
		},
		{
			img: "images/meny/beverages/urge15.png",
			name: "Urge",
			description: "1.5 l",
			price: 49
		},
		{
			img: "images/meny/beverages/toyen.png",
			name: "Tøyencola",
			description: "0.5 l",
			price: 29
		},
		{
			img: "images/meny/beverages/litenkaffe.png",
			name: "Kaffe",
			description: "Varm kopp, liten",
			price: 19
		},
		{
			img: "images/meny/beverages/storkaffe.png",
			name: "Kaffe",
			description: "Varm kopp, stor",
			price: 29
		},
		{
			img: "images/meny/beverages/munkholm.png",
			name: "Munkholm",
			description: "Lettøl, 0,33 l",
			price: 29
		}
	];

	//Returning the whole object
	const getBeverageContainer = () => beverageContainer;


	return {
		getBeverageContainer
	}


}());

export default BeverageContainerModule;