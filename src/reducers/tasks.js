import * as actions from '../actions/actionTypes';

const intialState = {
    tasks: [],
    loading: false,
    error: null
}

const tasks = (state = [], action) => {
    switch(action.type) {
        // FETCH TASKS
        case actions.FETCH_TASKS_STARTED:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actions.FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: action.payload.tasks
            }
        case actions.FETCH_TASKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        // ADD TASK
        case actions.ADD_TASK_STARTED:
            return {
                ...state,
                loading: false,
                error: null
            }
        case actions.ADD_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: [...state.tasks, action.payload.task]
            }
        case actions.ADD_TASK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        // REMOVE TASK
        case actions.REMOVE_TASK_STARTED:
            return {
                ...state,
                loading: false,
                error: null
            }
        case actions.REMOVE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: [...action.payload.tasks]
            }
        case actions.REMOVE_TASK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        // RTOGGLE TASK
        case actions.TOGGLE_TASK_STARTED:
            return {
                ...state,
                loading: false,
                error: null
            }
        case actions.TOGGLE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: [...action.payload.tasks]
            }
        case actions.TOGGLE_TASK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default tasks;