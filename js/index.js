import { renderWithListeners } from './renderWithListeners.js';
import { inputNewTask } from './inputNewTask.js';
import { filterFunc } from './toggleFilter.js';
import { searchTask } from './searchTask.js';
import { tasksArray, setItem } from './storage.js';
import { initTasksList } from './tasksGateway.js';


document.addEventListener('DOMContentLoaded', () => {
    initTasksList()
        .then(response => response.ok ? response.json() : '[]')
        .then(response => setItem(response))
        .then(() => {
            tasksArray !== '[]' ? renderWithListeners(tasksArray) : '';
            inputNewTask();
            filterFunc();
            searchTask();
        })

})

const onStorageChange = () => {
    renderWithListeners(tasksArray);
}

window.addEventListener('storage', onStorageChange);