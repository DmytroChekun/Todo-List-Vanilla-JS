import { renderList } from './listRenderer.js';
import { addEventListeners } from './initEventListeners.js';


export const renderWithListeners = (array)=> {
    renderList(array);
    addEventListeners(document.querySelectorAll('.todo-list__item'));
}