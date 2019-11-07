let nextId = 0;
const tasks = (state = [], action) => {
    switch(action.type) {
        case "ADD_TASK": 
            return [
                ...state,
                {
                    id: nextId++,
                    text: action.text,
                    done: false
                }
            ]
        case "REMOVE_TASK":
            return state.filter(task => {
                if (task.id != action.id) {
                    return true
                } else {
                    return false
                }
            })
        case "TOGGLE_TASK":
            return state.map(task => {
                if (task.id == action.id) {
                    return {
                        ...task,
                        done: !task.done
                    }
                } else {
                    return task
                }
            })
        default:
            return state
    }
}

export default tasks;