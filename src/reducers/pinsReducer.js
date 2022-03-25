export const pinsReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PIN':
            return state.includes(action.pin) ? state : [action.pin, ...state];
        case 'REMOVE_PIN':
            return state.filter((pin, index) => {
                return pin !== action.pin;
            });
        default:
            return state
    }
}