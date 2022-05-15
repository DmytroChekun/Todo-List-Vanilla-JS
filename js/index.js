import { renderWithListeners } from './renderWithListeners.js';
import { inputNewTask } from './inputNewTask.js';
import { filterFunc } from './toggleFilter.js';
import { searchTask } from './searchTask.js';
import { 
    tasksArray,
    setItem } from './storage.js';
import { getTasksList, initTasksList } from './tasksGateway.js';


document.addEventListener('DOMContentLoaded', () => {
    // JSON.parse(localStorage.getItem('toDoList') && JSON.parse(localStorage.getItem('toDoList')) !== '[]' ? '' : setItem('[]'));
    initTasksList()
        .then(response => response.ok ? response.json() : '[]')
        .then(response => setItem(response))
        .then(response => {
            console.log(response);
            tasksArray !== '[]' ? renderWithListeners(tasksArray) : '';
            inputNewTask();
            filterFunc();
            searchTask();
        })
    

    // fetch('https://6274f9b95dc4f5764b9c52e4.mockapi.io/todo/tasks/')
    //     .then( response => response.json())
    //     .then( data =>
    //         setItem(data)
    //         // {
    //         //     if (data.ok) {
    //         //     setItem(data);
    //         //     renderWithListeners(tasksArray);
    //         //     inputNewTask();
    //         //     filterFunc();
    //         //     searchTask();
    //         //     } else {
    //         //         setItem('[]');
    //         //         console.log('2');
    //         //         renderWithListeners(tasksArray);
    //         //         inputNewTask();
    //         //         filterFunc();
    //         //         searchTask();
    //         //     }
    //         //     // response.ok ? response.json() : console.log('d') )
    //         // }
    //     )
    // })


    // getTasksList()
    //     // .catch()
    //     // .resolve("Not found")
    //     //     .then(function(value) {
    //     //         console.log(value); // "Success"
    //     //     }, function(value) {
    //     //         // console.log('errrrrrrrrrrrrroooooooooooor');
    //     //         // не будет вызвана
    //     //     });
        





        // .then(tasksList => {
        //     console.log(tasksList);
        //     setItem(tasksList);
        // })
        // .then(
        //     renderWithListeners(tasksArray)
        // )
        // .then(
        //     inputNewTask()
        // )
        // .then(
        //     filterFunc()
        // )
        // .then(
        //     searchTask()
        // )
// console.log(tasksArray);
})

const onStorageChange = () => {
    renderWithListeners(tasksArray);
}

window.addEventListener('storage', onStorageChange);