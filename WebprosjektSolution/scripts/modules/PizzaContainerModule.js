const PizzaContainerModule = (function () {
  //Creating Pizza Array
  let pizzaContainer = [
    {
      img: "images/meny/Pizzas/ufo.jpg",
      name: "Ufo",
      description: "Flyvende pizza toppet med pepperoni, skinke og ananas",
      allergies: "Melk, nøtter, hvete",
      size: "S",
      price: 169,
    },
    {
      img: "images/meny/Pizzas/kebabpizza.jpg",
      name: "Carolina reaper triple cheese",
      description:
        "Landets sterkeste pizza. Kjøttdeig, løk, carolina reaper krydder, trippel ost",
      allergies: "Soya, nøtter, egg",
      size: "L",
      price: 200,
    },
    {
      img: "images/meny/Pizzas/svensken.jpg",
      name: "Svensken",
      description: "Simpel pizza med skinke, ost og sopp",
      allergies: "Melk, nøtter, soya.",
      size: "S",
      price: 189,
    },
    {
      img: "images/meny/Pizzas/donjuan.jpg",
      name: "Don Juan",
      description: "Biffstrimler, sopp og løk",
      allergies: "Gluten, hvete",
      size: "L",
      price: 199,
    },
    {
      img: "images/meny/Pizzas/viking.jpg",
      name: "Viking",
      description: "Biff, paprika, løk og ananas. Toppet med bernaise",
      allergies: "Gluten, egg og laktose",
      size: "L",
      price: 199,
    },
    {
      img: "images/meny/Pizzas/nomeat.jpg",
      name: "Hawaii",
      description: "biff, pepperoni, løk",
      allergies: "Gluten, egg og laktose",
      size: "L",
      price: 189,
    },
    {
      img: "images/meny/Pizzas/tacospesial.jpg",
      name: "Tacospesial",
      description: "Kjøttdeig, mais, paprika, løk, jalapenos og tortillachips",
      allergies: "Gluten, egg og laktose",
      size: "L",
      price: 199,
    },
    {
      img: "images/meny/Pizzas/fourcheese.jpg",
      name: "Vegetariano",
      description: "Tomat og ost",
      allergies: "Gluten, egg og laktose",
      size: "L",
      price: 199,
    },
    {
      img: "images/meny/Pizzas/ufo.jpg",
      name: "The Wheelchair",
      description:
        "Vegansk pizza med avocado, oliven, sopp, løk, purreløk, vårløk og oregano",
      allergies: "Gluten",
      size: "L",
      price: 219,
    },
    {
      img: "images/meny/Pizzas/kebabpizza.jpg",
      name: "Rango",
      description: "Kjøttdeig, jalapeño, paprika, sopp, mais, tacosaus",
      allergies: "Hvete, egg, soya",
      size: "L",
      price: 199,
    },
    {
      img: "images/meny/Pizzas/nomeat.jpg",
      name: "The No Meat",
      description: "Sopp, paprika, purreløk og oregano",
      allergies: "Hvete, egg, soya",
      size: "L",
      price: 179,
    },
    {
      img: "images/meny/Pizzas/svensken.jpg",
      name: "Rune Ali 1949",
      description: "Pepperoni, bacon, løk, tomat",
      allergies: "Hvete, egg, soya",
      size: "L",
      price: 229,
    },
    {
      img: "images/meny/Pizzas/fourcheese.jpg",
      name: "Fourcheese",
      description: "Mozarella, parmesan, cheddar og blåmuggost",
      allergies: "Hvete, egg, soya",
      size: "L",
      price: 209,
    },
    {
      img: "images/meny/Pizzas/donjuan.jpg",
      name: "No gluten here, bitch!",
      description: "Glutenfri deig, glutenfri ost, biff",
      allergies: "Egg, soya",
      size: "L",
      price: 299,
    },
    {
      img: "images/meny/Pizzas/viking.jpg",
      name: "Love pizza",
      description:
        "Biff, champinjong, løk, purreløk, oliven, toppet med litt kjærlighet ;)",
      allergies: "hvete, egg, soya",
      size: "L",
      price: 179,
    },
    {
      img: "images/meny/Pizzas/tacospesial.jpg",
      name: "Shrimpy love",
      description: "Reke, purreløk, paprika",
      allergies: "Hvete, egg, soya",
      size: "L",
      price: 899,
    },
  ];

  //Set different values to pizza.
  const setPizzaContainer = (name, description, allergies, price) => {
    pizzaContainer.map((pizza) => {
      if (pizza.name === name) {
        pizza.img = pizza.img;
        pizza.name = pizza.name;
        pizza.description = description;
        pizza.allergies = allergies;
        pizza.size = pizza.size;
        pizza.price = price;

        return pizza;
      }
    });
  };

  //Returning the whole object
  const getPizzaContainer = () => pizzaContainer;
  const getPizzaByName = (name) =>
    pizzaContainer.find((pizza) => pizza.name === name);

  return { setPizzaContainer, getPizzaContainer, getPizzaByName };
})();

//exporting module
export default PizzaContainerModule;
