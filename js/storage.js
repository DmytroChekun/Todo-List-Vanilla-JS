export const tasksArray = JSON.parse(localStorage.getItem('toDoList')) || [];

export const getNewTasksArray = () => JSON.parse(localStorage.getItem('toDoList'));

export const setItem = (tasks) =>
    localStorage.setItem('toDoList', JSON.stringify(tasks));