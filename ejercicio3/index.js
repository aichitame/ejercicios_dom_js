//Crea una lista ul > li dinámicamente en el html que imprima cada uno de los
//países
const countries = ['Japan', 'Nicaragua', 'Switzerland', 'Australia', 'Venezuela'];
const ul = document.createElement("ul");

for (const country of countries){
    const li = document.createElement("li");
    li.innerText = country;
    ul.appendChild(li);
}
document.body.appendChild(ul);
console.log(countries);

//Elimina el elemento que tenga la clase .fn-remove-me
const elemento = document.querySelectorAll(".fn-remove-me");
elemento.forEach(element => element.remove());

//Utiliza el array para crear dinamicamente una lista ul > li de elementos en
//el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford Fiesta', 'Audi A4', 'Toyota Corola'];
const otroUl = document.createElement("ul");
cars.forEach(car =>{
    const li = document.createElement("li");
    li.textContent = car;
    otroUl.appendChild(li);
})
const div = document.querySelector('[data-function="printHere"]');
div.appendChild(otroUl);
console.log(cars);

//Crea dinámicamente en el html una serie de divs que contenga un elemento h4 para el título y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement("div");
document.body.appendChild(container);


countries2.forEach((element) => {
    const otroDiv = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = element.title;

    const img = document.createElement("img");
    img.src = element.imgUrl;
    img.alt = element.title;

    otroDiv.appendChild(title);
    otroDiv.appendChild(img);
    container.appendChild(otroDiv);
});
