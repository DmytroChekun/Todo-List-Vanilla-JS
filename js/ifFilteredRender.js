import { renderList } from './listRenderer.js';
import { todoArray, doneArray } from './filterMethods.js';

const allBtns = document.querySelectorAll('.filter-btn');
export let filteredCheck = false;

export const ifFilteredRender = (array, noRender) => {
    allBtns.forEach( item => {
        if (item.classList.contains('todo') && item.classList.contains('active')) {
            renderList(todoArray(array));
            filteredCheck = true;
        }else if (item.classList.contains('done') && item.classList.contains('active')) {
            renderList(doneArray(array));
            filteredCheck = true;
        }else if (item.classList.contains('all') && item.classList.contains('active') && noRender !== true) {
            renderList(array);
            filteredCheck = false;
        }
    });
}