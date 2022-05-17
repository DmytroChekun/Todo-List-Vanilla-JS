import { ifFilteredRender } from "./ifFilteredRender.js";
import { tasksArray, setItem, getNewTasksArray } from "./storage.js";
import { getTasksList, updateTask, deleteTask } from "./tasksGateway.js";


const counterUpdate = (array) => {
    let doneTasksCount = 0;
    let activeTasksCount = 0;
    const todo = document.querySelector('.todo-count');
    const done = document.querySelector('.done-count');
    array.forEach(arr => arr.done ? doneTasksCount++ : activeTasksCount++);
    todo.innerHTML = activeTasksCount;
    done.innerHTML = doneTasksCount;
}


const taskToUpdate = (element, importantState, doneState, gateway) => {
    const task = {
        text: element.text,
        important: importantState ? !element.important : element.important,
        done: doneState ? !element.done : element.done,
        createDate: element.createDate,
        finishDate: !element.done ?
            new Date().toLocaleString()
            :
            null
    }
    return gateway ? updateTask(element.id, task) : [ element.id, task ];
}


export const addEventListeners = (array) => array.forEach(item => {

    item.addEventListener('click', event => {
        const targetIndex = +item.dataset.index;
        const targetTask = getNewTasksArray().find(element => +element.id === targetIndex ? element : '');

        if (event.target.classList.contains('delete')) {

            deleteTask(+targetIndex)
                .then(getTasksList)
                .then(newTasksList => {
                    setItem(newTasksList);
                    ifFilteredRender(getNewTasksArray(), false);
                    addEventListeners(document.querySelectorAll('.todo-list__item'));
                })

        } else if (event.target.classList.contains('important')) {
            const [elementId, task] = taskToUpdate(targetTask, true);
            updateTask(elementId, task)
                .then(getTasksList)
                .then(newTasksList => {
                    setItem(newTasksList);
                    ifFilteredRender(newTasksList);
                    addEventListeners(document.querySelectorAll('.todo-list__item'));
            })
            
        } else {
            taskToUpdate(targetTask, false, true, true);
            const [elementId, task] = taskToUpdate(targetTask, false, true);
            updateTask(elementId, task)
                .then(getTasksList)
                .then(newTasksList => {
                    setItem(newTasksList);
                    ifFilteredRender(newTasksList);
                    addEventListeners(document.querySelectorAll('.todo-list__item'));
                })
        }
        counterUpdate(getNewTasksArray());
    })
}, counterUpdate(getNewTasksArray()));