import { renderWithListeners } from "./renderWithListeners.js";
import { createTask, getTasksList, initTasksList } from "./tasksGateway.js";
import { tasksArray, setItem, getNewTasksArray } from "./storage.js";
import { renderList } from "./listRenderer.js";
import { ifFilteredRender } from "./ifFilteredRender.js";
import { addEventListeners } from "./initEventListeners.js";

const textInput = document.querySelector('.add-item-input');
const confirmButton = document.querySelector('.add-item-btn');




const biggestIdValue = () => {
    let maxValue = 0;

    if (tasksArray === '[]') {
        maxValue = 1;
    } else {
        tasksArray.forEach(item => {
            +item.id > maxValue ? (maxValue = (+item.id + 1)) : '';
        })
    }

    return maxValue;
}


export const inputNewTask = ()=> {
    
    let textValue = '';

    const addNewTask = () => {
        if (textInput.value.length > 1) {
            textInput.value = '';
            const newTask = {
                text: textValue,
                important: false,
                done: false,
                createDate: new Date().toISOString(),
                finishDate: undefined,
                id: biggestIdValue()
            }
            // createTask(newItem)
            // .then(
            //     initTasksList
            //         .then(response => setItem(response.json()))
            //         .then(renderList(getNewTasksArray()))
            //         .then(addEventListeners(document.querySelectorAll('.todo-list__item')))
            // )
            createTask(newTask)
            .then(getTasksList)
            .then(newTasksList => {
                setItem(newTasksList);
                ifFilteredRender(newTasksList);
                addEventListeners(document.querySelectorAll('.todo-list__item'));
            })
        }
    }

    textInput.addEventListener('change', () => {
        if (textInput.value) {
            textValue = textInput.value;
            confirmButton.addEventListener('click', ()=> {
                addNewTask();
            })
        }
    })
    textInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            if (textInput.value) {
                textValue = textInput.value;
                event.preventDefault();
                addNewTask();
            }
        }
    });
    
}