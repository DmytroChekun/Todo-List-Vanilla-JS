const baseUrl = 'https://6274f9b95dc4f5764b9c52e4.mockapi.io/todo/tasks/';

export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const updateTask = (taskId, taskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const deleteTask = (taskId) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });

export const initTasksList = () =>
    fetch(baseUrl)
        .then(response => response);

export const getTasksList = () =>
    fetch(baseUrl)
        .then(response => response.json());