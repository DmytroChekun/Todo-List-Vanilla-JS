export const todoArray = (array) => array.filter(item => item.done === false);
export const doneArray = (array) => array.filter(item => item.done === true);