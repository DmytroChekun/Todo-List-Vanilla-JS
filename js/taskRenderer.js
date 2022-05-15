export const renderListItem = (text, isImportant, isDone, id) => {
    
    const liElement = document.createElement('li');

    liElement.classList.add('todo-list__item');
    liElement.setAttribute('data-index', id);

    isImportant ? liElement.classList.add('important') :
        liElement.classList.remove('important');

    isDone ? liElement.classList.add('done') :
        liElement.classList.remove('done');

    liElement.innerHTML = `
        <div class="todo-list__item-content">
            <span class="todo-list__item-label">${text}</span>
            <span class="todo-list__item-btns">
                <button class="todo-list__item-btn delete">
                    <img src="img/trash-can.svg" alt="">
                </button>
                <button class="todo-list__item-btn important">!</button>
            </span>
        </div>
    `;

    return liElement;
}