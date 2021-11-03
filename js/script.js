'use strict';

//Nodos
const btn1 = document.querySelector(".btn1")
let error = document.querySelector(".error")
const body = document.querySelector("body")
// const btn2 = document.querySelector(".btn2")


//Variables
let edad;

//Funciones
const pregunta = () => {
    error.textContent = ""; // esto "elimina" el texto puesto por la condición
    edad = prompt("Dime tu edad");
    // error.textContent = 0;
    // console.log(edad)
    // edad = Number(edad);
    console.log(edad)
    if (isNaN(edad)==false) {
        if (edad>=18) {
            // las siguientes líneas son formas de implementar
            // css al js para pintar algo tras una acción
            body.style.backgroundColor = "skyblue";
            // console.log("blue")
        } else {
            document.body.style.backgroundColor = "pink";
            // console.log("pink")
        }
    } else {
        error.textContent = `Debe meter un número --> ${edad}`;
    }
    
};


// const cambio = () => {
//     alert("this");
// }

//Eventos
btn1.addEventListener(
    "click",
    pregunta
);

// btn2.addEventListener(
//     "click",
//     cambio
// );