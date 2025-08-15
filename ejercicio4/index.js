//Añade un botón a tu html con el id btnToClick y en tu JS añade el evento click que ejecute un console log con la información del evento del click
const button = document.querySelector("#btnToClick");
console.log(button);
button.addEventListener("click", (event) =>{
    console.log(event);
});

//Añade un evento 'focus' que ejecute un console.log con el valor del input

