import { renderListItem } from './taskRenderer.js';



export const renderList = array => {
    const toDoList = document.querySelector('.todo-list');
    toDoList.innerHTML = '';
    array.forEach(item => {
        toDoList.append(
            renderListItem(item.text, item.important, item.done, item.id)
        );
    })
}
