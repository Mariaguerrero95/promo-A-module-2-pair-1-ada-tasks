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

const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript", completed: false, id: 4,
    },
];


for (const task of tasks) {
    ulList.innerHTML += `
        <li class="task-item">
            <input type="checkbox" class="js-checkbox" id="${task.id}">
            <label class="${task.completed === true ? 'cross-out': ''}"> ${task.name}</label> 
        </li>
    `;
}
/*
    - Si la tarea está completada, añadimos una clase
if (condicion){
    instruccion
}

condicion ? instruccion1 : intruccion2
*/

