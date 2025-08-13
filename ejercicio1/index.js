//Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector(".showme")
console.log(button)

//Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector("#pillado")
console.log(h1);

//usa querySelector para mostrar por consola todos los p
const todosLosP = document.querySelectorAll("p")
console.log(todosLosP);

//usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const todosPokemon = document.querySelectorAll(".pokemon")
console.log(todosPokemon);
todosPokemon.forEach(pokemon => console.log(pokemon.textContent))

//usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
const dataFunction = document.querySelectorAll('[data-function="testMe"]')
console.log(dataFunction);
dataFunction.forEach(element => {console.log(dataFunction)
});
//Usa querySelector para mostrar por consola el 3° personaje con el atributo data-function="testMe"
const dataFunction3 = document.querySelectorAll('[data-function="testMe"]')
console.log(dataFunction3[2].textContent);