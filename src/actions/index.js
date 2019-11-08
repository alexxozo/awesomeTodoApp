import * as actions from './actionTypes';
import * as axios from 'react-native-axios';

const apiUrl = "https://5dc427ac13d21600147e600b.mockapi.io";

export function addTask(text) {
    return function(dispatch, getState) {
        dispatch({type: actions.ADD_TASK_STARTED});

        return axios.post(apiUrl + "/tasks", {text, done: false}).then((response) => {
                dispatch({
                    type: actions.ADD_TASK_SUCCESS, 
                    payload: {
                        task: response.data
                    }
                })
        }).catch((error) => {
            dispatch({
                type: actions.ADD_TASK_FAILURE, 
                payload: {
                    error
                }
            })
        })
    }
}

export function getTasks() {
    return function(dispatch, getState) {
        dispatch({type: actions.FETCH_TASKS_STARTED});
        return axios.get(apiUrl + "/tasks").then(function(response) {
            if (response.status == 200) {
                dispatch({
                    type: actions.FETCH_TASKS_SUCCESS, 
                    payload: {
                        tasks: response.data
                    }
                })
            }
        }).catch((error) => {
            dispatch({
                type: actions.FETCH_TASKS_FAILURE,
                payload: {
                    error
                }
            })
        })
    }
}

export const removeTask = (id) => {
    return function(dispatch, getState) {
        dispatch({type: actions.REMOVE_TASK_STARTED});

        return axios.delete(apiUrl + "/tasks/" + id).then(() => {
            let state = getState();
            let tasks = state.tasks.filter(task => {
                if (task.id != id) {
                    return true
                } else {
                    return false
                }
            });
            dispatch({
                type: actions.REMOVE_TASK_SUCCESS,
                payload: {
                    tasks
                }
            })
        }).catch((error) => {
            dispatch({
                type: actions.REMOVE_TASKS_FAILURE, 
                payload: {
                    error: response.data
                }
            })
        })
    }
}

export const toggleTask = (id, done) => {
    return function(dispatch, getState) {
        dispatch({type: actions.TOGGLE_TASK_STARTED});
        return axios.put(apiUrl + "/tasks/" + id, {done: !done}).then(() => {
            let state = getState();
            let tasks = state.tasks.map(task => {
                if (task.id == id) {
                    return {
                        ...task,
                        done: !task.done
                    }
                } else {
                    return task
                }
            });
            dispatch({
                type: actions.TOGGLE_TASK_SUCCESS,
                payload: {
                    tasks
                }
            })
        }).catch((error) => {
            dispatch({
                type: actions.TOGGLE_TASKS_FAILURE, 
                payload: {
                    error: response.data
                }
            })
        })
    }
}