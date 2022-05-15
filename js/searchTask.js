import { tasksArray, getNewTasksArray } from "./storage.js";
import { ifFilteredRender } from "./ifFilteredRender.js";
import { addEventListeners } from "./initEventListeners.js";


const searchInput = document.querySelector('.search-panel');

export const searchTask = () => {
    searchInput.addEventListener('keyup', () => {
        const searchValue = searchInput.value.toLowerCase();
        const filteredArray =
            getNewTasksArray().filter(item => item.text.toLowerCase().includes(searchValue));
        ifFilteredRender(filteredArray);
        addEventListeners(document.querySelectorAll('.todo-list__item'));
    })
}