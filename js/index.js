import { renderWithListeners } from './renderWithListeners.js';
import { inputNewTask } from './inputNewTask.js';
import { filterFunc } from './toggleFilter.js';
import { searchTask } from './searchTask.js';
import { tasksArray, setItem, getNewTasksArray } from './storage.js';
import { initTasksList } from './tasksGateway.js';


document.addEventListener('DOMContentLoaded', () => {
    initTasksList()
        .then(response => response.ok ? response.json() : '[]')
        .then(response => setItem(response))
        .then(() => {
            tasksArray !== '[]' ? renderWithListeners(getNewTasksArray()) : '';
            inputNewTask();
            filterFunc();
            searchTask();
        })

})

const onStorageChange = () => {
    renderWithListeners(getNewTasksArray());
}

window.addEventListener('storage', onStorageChange);