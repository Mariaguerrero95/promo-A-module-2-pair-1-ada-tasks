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

ulList.innerHTML = '';

buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();

    for (const task of tasks) {
        ulList.innerHTML += `
            <li class="task-item">
                <input type="checkbox" ${task.completed ? "checked" : ""} class="js-checkbox" data-id="${task.id}">
                <label ${task.completed ? 'style="text-decoration: line-through; color: gray;"' : ''}> ${task.name}</label>
            </li>
        `;
    }

})