//Inserta dinámicamente en un html un div vacío con JS
const div = document.createElement("div")
div.innerText = "div vacío";
console.log(div);

//Inserta dinámicamente en un html un div que contenga una p con JS
div.innerHTML = `<p>Párrafo dentro del div</p>`
document.body.appendChild(div);

//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const container = document.createElement("div");

for (let i = 1; i <= 6; i++){
    const p = document.createElement("p")
    p.textContent = `Elemento ${i}`;
    container.appendChild(p);
}
document.body.appendChild(container)
console.log(container);

//Inserta dinámicamente con JS en un html una p con el texto "¡Soy dinámico!"
const nuevaP = document.createElement("p");
nuevaP.innerText = "¡Soy dinámico!";
document.body.appendChild(nuevaP)
console.log(nuevaP);

//Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const textoh2 = document.querySelector(".fn-insert-here");
textoh2.textContent = "Wubba Lubba dub dub";
console.log(textoh2);

//Basandote en el siguiente array crea una lista ul > li con los textos del array:
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");

for (const app of apps){
    const li = document.createElement("li");
    li.innerText = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);

//Elimina todos los nodos que tengan la clase .fn-remove-me
const nodos = document.querySelectorAll(".fn-remove-me");
nodos.forEach(element => element.remove());

//Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
