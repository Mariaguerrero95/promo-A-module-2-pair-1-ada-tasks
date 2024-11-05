'use strict';

/*
    - Cuando la usuaria haga click en Agregar, se cree una nueva tarea
    - Necesitamos pintar la lista en el html
    - Para esto necesitamos botón agregar, input de agregar y la ul vacía
    Pasos para crear la lista
    - Necesitamos crear una lista de tareas
*/

const buttonAdd = document.querySelector (".js-button1");
const inputButtonAdd = document.querySelector (".js-add");
const ulList = document.querySelector (".js-list");

let tasks = [
];


const renderTasks = () => {
    for (const task of tasks) {
    ulList.innerHTML += `
        <li class="task-item">
            <input type="checkbox" class="js-checkbox" id="${task.id}">
            <label class="${task.completed === true ? 'cross-out': ''}"> ${task.name}</label> 
        </li>
    `;
}
}

/*
    - Si la tarea está completada, añadimos una clase
if (condicion){
    instruccion
}
CONDICIONAL TERNARIO
condicion ? instruccion1 : intruccion2
*/

// const listFetch = document.querySelector (".js-fetch");
const GITHUB_USER = "<ANGELACAMU>";
const SERVER_URL = `https://dev.adalab.es/api/todo`;

/* Crear una lista vacia
    Seleccionar del html la lista
    crear variables para almacenar la informacion del usuario github y la url
    Conseguir la informacion --> Peticion al servidor para conseguir la info y url
   */

fetch(SERVER_URL)
    .then((response) =>{
        return response.json();
    })

    .then((data) =>{
        tasks = data.results;
        renderTasks ();
    })


const handleNewTask = (event) => {
    event.preventDefault();

    const nameTask = inputButtonAdd.value;
    const newTask = {
            name: "nameTask",
            completed: false,
    }

    tasks.push(newTask);
    renderNewTasks();
}
const renderNewTasks = () => {
    for (const task of tasks){
        ulList.innerHTML += `
        <li><p>${task.name}</p></li>
            
        `
        console.log("ha hecho click");
        
    }
    }

    

buttonAdd.addEventListener("click", handleNewTask);
