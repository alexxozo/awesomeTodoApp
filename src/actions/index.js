import * as actions from './actionTypes';

let nextId = 0;
export const addTask = (text) => ({
    type: actions.ADD_TASK,
    id: nextId++,
    text
})

export const removeTask = (id) => ({
    type: actions.REMOVE_TASK,
    id
})

export const toggleTask = (id) => ({
    type: actions.TOGGLE_TASK,
    id
})