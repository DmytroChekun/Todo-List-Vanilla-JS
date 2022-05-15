// let tasksArray = JSON.parse(localStorage.getItem('toDoList')) || [
//     {
//         text: "Drink Coffee",
//         important: false,
//         done: true,
//         id: 1,
//     },
//     {
//         text: "Learn JS",
//         important: false,
//         done: false,
//         id: 2,
//     },
//     {
//         text: "Make a great app",
//         important: true,
//         done: false,
//         id: 3,
//     },
// ];


// const todoArray = (array) => array.filter( item => item.done === false );
// const doneArray = (array) => array.filter( item => item.done === true );

// const toDoList = document.querySelector('.todo-list');
// const searchInput = document.querySelector('.search-panel');
// const filtersBtnsWrap = document.querySelector('.filter-btns');
// const allBtns = document.querySelectorAll('.filter-btn');
// const textInput = document.querySelector('.add-item-input');
// const confirmButton = document.querySelector('.add-item-btn');

// const biggestIdValue = () => {
//     let maxValue = 0;
//     tasksArray.forEach(item => {
//         item.id > maxValue ? (maxValue = item.id) : '';
//     });
//     return maxValue;
// }

// const counterUpdate = (array) => {
//     let doneTasksCount = 0;
//     let activeTasksCount = 0;
//     const todo = document.querySelector('.todo-count');
//     const done = document.querySelector('.done-count');
//     array.forEach(arr => arr.done ? doneTasksCount++ : activeTasksCount++);
//     todo.innerHTML = activeTasksCount;
//     done.innerHTML = doneTasksCount;
// }



// const createListItem = (text, isImportant, isDone, id) => {
//     const liElement = document.createElement('li');
//     liElement.classList.add('todo-list__item');
//     liElement.setAttribute('data-index', id);

//     isImportant ? liElement.classList.add('important') :
//         liElement.classList.remove('important');

//     isDone ? liElement.classList.add('done') :
//         liElement.classList.remove('done');

//     liElement.innerHTML = `
//         <div class="todo-list__item-content">
//             <span class="todo-list__item-label">${text}</span>
//             <span class="todo-list__item-btns">
//                 <button class="todo-list__item-btn delete">
//                     <img src="img/trash-can.svg" alt="">
//                 </button>
//                 <button class="todo-list__item-btn important">!</button>
//             </span>
//         </div>
//     `;

//     return liElement;
// }



// const renderList = array => {
//     toDoList.innerHTML = '';
//     array.map(item => {
//         toDoList.append(
//             createListItem(item.text, item.important, item.done, item.id)
//         );
//     })
// }


// const ifFilteredRender = array => {
//     allBtns.forEach( item => {
//         if (item.classList.contains('todo') && item.classList.contains('active')) {
//             renderList(todoArray(array));
//             console.log('todo filter');
//         }else if (item.classList.contains('done') && item.classList.contains('active')) {
//             renderList(doneArray(array));
//             console.log('done filter');
//         }else if (item.classList.contains('all') && item.classList.contains('active')) {
//             renderList(array);
//             console.log('all');
//         }
//     });
// }


// const addEventListeners = (array) => array.forEach(item => {
    
//     item.addEventListener('click', event => {
//         const itemIndex = item.dataset.index;

//         if (event.target.classList.contains('delete')) {
//             const filteredArray = tasksArray.filter(element => +element.id !== +itemIndex);
//             tasksArray = [ ...filteredArray ];
//             localStorage.setItem('toDoList', JSON.stringify(tasksArray));
//             ifFilteredRender(tasksArray);
//             addEventListeners(document.querySelectorAll('.todo-list__item'));

//         } else if (event.target.classList.contains('important')) {

//             tasksArray.map( (taskItem, idx) => {
//                 if (+taskItem.id === +itemIndex) {
//                     item.classList.toggle('important');
//                     tasksArray[idx].important = !tasksArray[idx].important;
//                     localStorage.setItem('toDoList', JSON.stringify(tasksArray));
//                 }
//             })

//         } else {

//             tasksArray.map( (taskItem, idx) => {
//                 if (+taskItem.id === +itemIndex) {
//                     item.classList.toggle('done');
//                     tasksArray[idx].done = !tasksArray[idx].done;
//                     localStorage.setItem('toDoList', JSON.stringify(tasksArray));
//                     ifFilteredRender(tasksArray);
//                     addEventListeners(document.querySelectorAll('.todo-list__item'));
//                 }
//             })

//         }
//         counterUpdate(tasksArray);
//     })
// }, counterUpdate(tasksArray));


// const renderWithListeners = (array)=> {
//     renderList(array);
//     addEventListeners(document.querySelectorAll('.todo-list__item'));
// }

// renderWithListeners(tasksArray);


// const inputNewListItem = ()=> {
    
//     let textValue = '';

//     const addNewTask = () => {
//         if (textInput.value.length > 1) {
//             textInput.value = '';
//             tasksArray.push(
//                 {
//                     text: textValue,
//                     important: false,
//                     done: false,
//                     id: (tasksArray.length > 0) ? (biggestIdValue() + 1) : 1
//                 }
//             );
//             localStorage.setItem('toDoList', JSON.stringify(tasksArray));
//             renderWithListeners(tasksArray);
//         }
//     }

//     textInput.addEventListener('change', () => {
//         if (textInput.value) {
//             textValue = textInput.value;
//             confirmButton.addEventListener('click', ()=> {
//                 addNewTask();
//             })
//         }
//     })
//     textInput.addEventListener("keypress", (event) => {
//         if (event.key === "Enter") {
//             if (textInput.value) {
//                 textValue = textInput.value;
//                 event.preventDefault();
//                 addNewTask();
//             }
//         }
//     });
    
// }

// inputNewListItem();


// const filterFunc = () => {

//     const buttonsActiveSwith = (element) => {
//         allBtns.forEach(item => {
//             if (item !== element) {
//                 item.classList.remove('active');
//             }
//         });
//     }

//     filtersBtnsWrap.addEventListener('click', event => {
//         const eventReturner = (array) => {
//             event.target.classList.add('active');
//             buttonsActiveSwith(event.target);
//             renderWithListeners(array);
//         }
//         if (event.target.classList.contains('all') &&
//             !event.target.classList.contains('active')) {
                
//                 eventReturner(tasksArray);

//         } else if (event.target.classList.contains('todo') &&
//             !event.target.classList.contains('active')) {

//                 eventReturner(todoArray(tasksArray));  

//         } else if (event.target.classList.contains('done') &&
//             !event.target.classList.contains('active')) {

//                 eventReturner(doneArray(tasksArray));

//         }
//     })
// }

// filterFunc();



// const searchTask = () => {
//     searchInput.addEventListener('keyup', () => {
//         const searchValue = searchInput.value.toLowerCase();
//         const filteredArray = 
//         tasksArray.filter(item => item.text.toLowerCase().includes(searchValue));
//         console.log(filteredArray);
//         ifFilteredRender(filteredArray);
//         addEventListeners(document.querySelectorAll('.todo-list__item'));
//     })
// }

// searchTask();

// const onStorageChange = () => {
//     tasksArray = JSON.parse(localStorage.getItem('toDoList'));
//     renderWithListeners(tasksArray);
// }

// window.addEventListener('storage', onStorageChange);



const taskToUpdate = (element, importantState, doneState) => {
    const elementId = element.id;
    const task = {
        text: element.text,
        important: importantState ? element.important : element.important,
        done: doneState ? element.done : !element.done,
        createDate: element.createDate,
        finishDate: element.done ?
            new Date().toISOString()
            :
            null
    }
    return updateTask(elementId, task);
}
