let nextId = 0;
export default tasks = (state = [], action) => {
    switch(action) {
        case "ADD_TASK": 
            return [
                ...state,
                {
                    id: nextId++,
                    text: action.text,
                    completed: false
                }
            ]
        case "REMOVE_TASK":
            return []
        case "TOGGLE_TASK":
            return []
        default:
            return state
    }
}