import { tasksArray, getNewTasksArray } from './storage.js';
import { renderWithListeners } from './renderWithListeners.js';
import { todoArray, doneArray } from './filterMethods.js';



const filtersBtnsWrap = document.querySelector('.filter-btns');
const allBtns = document.querySelectorAll('.filter-btn');


export const filterFunc = () => {

    const buttonsActiveSwith = (element) => {
        allBtns.forEach(item => {
            if (item !== element) {
                item.classList.remove('active');
            }
        });
    }

    filtersBtnsWrap.addEventListener('click', event => {
        const eventReturner = (array) => {
            event.target.classList.add('active');
            buttonsActiveSwith(event.target);
            renderWithListeners(array);
            
        }
        if (event.target.classList.contains('all') &&
            !event.target.classList.contains('active')) {
                eventReturner(getNewTasksArray());

        } else if (event.target.classList.contains('todo') &&
            !event.target.classList.contains('active')) {
                eventReturner(todoArray(getNewTasksArray()));  

        } else if (event.target.classList.contains('done') &&
            !event.target.classList.contains('active')) {
                eventReturner(doneArray(getNewTasksArray()));

        }
    })
}